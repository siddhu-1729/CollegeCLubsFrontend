import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  OnDestroy,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CLUB_MAP, ClubAchievement, ClubEvent, ClubEventImage } from '../data/clubs.data';
import { ClubAuthService } from '../services/club-auth.service';
import { ClubEventsService } from '../services/club-events.service';

interface EventForm {
  title: string;
  date: string;
  venue: string;
  description: string;
}

interface AchievementForm {
  title: string;
  year: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-club-page',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './club-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(ClubAuthService);
  private readonly eventsService = inject(ClubEventsService);
  private carouselTimer: ReturnType<typeof setInterval> | null = null;

  readonly clubId = signal(this.route.snapshot.paramMap.get('clubId') ?? '');
  readonly club = computed(() => CLUB_MAP[this.clubId()]);
  readonly events = signal<ClubEvent[]>(this.eventsService.getEvents(this.clubId()));
  readonly achievements = signal<ClubAchievement[]>(this.eventsService.getAchievements(this.clubId()));
  readonly eventGallery = computed<ClubEventImage[]>(() => this.club()?.eventGallery ?? []);
  readonly activeGalleryIndex = signal(0);
  readonly isLoggedIn = signal(this.authService.isLoggedIn(this.clubId()));
  readonly editingEventId = signal<string | null>(null);
  readonly editingAchievementId = signal<string | null>(null);

  readonly form = signal<EventForm>({
    title: '',
    date: '',
    venue: '',
    description: ''
  });

  readonly achievementForm = signal<AchievementForm>({
    title: '',
    year: '',
    category: 'Achievement',
    description: ''
  });

  ngOnInit(): void {
    if (this.eventGallery().length > 1) {
      this.startCarousel();
    }
  }

  trackByEvent(_: number, event: ClubEvent): string {
    return event.id;
  }

  trackByAchievement(_: number, achievement: ClubAchievement): string {
    return achievement.id;
  }

  trackByGalleryImage(index: number, image: ClubEventImage): string {
    return `${image.src}-${index}`;
  }

  setActiveGalleryIndex(index: number): void {
    const gallerySize = this.eventGallery().length;
    if (!gallerySize) {
      return;
    }

    this.activeGalleryIndex.set((index + gallerySize) % gallerySize);
    this.restartCarousel();
  }

  showNextGalleryImage(): void {
    this.setActiveGalleryIndex(this.activeGalleryIndex() + 1);
  }

  showPreviousGalleryImage(): void {
    this.setActiveGalleryIndex(this.activeGalleryIndex() - 1);
  }

  setFormField<K extends keyof EventForm>(key: K, value: EventForm[K]): void {
    this.form.update((form) => ({
      ...form,
      [key]: value
    }));
  }

  setAchievementFormField<K extends keyof AchievementForm>(key: K, value: AchievementForm[K]): void {
    this.achievementForm.update((form) => ({
      ...form,
      [key]: value
    }));
  }

  editEvent(event: ClubEvent): void {
    this.editingEventId.set(event.id);
    this.form.set({
      title: event.title,
      date: event.date,
      venue: event.venue,
      description: event.description
    });
  }

  cancelEdit(): void {
    this.editingEventId.set(null);
    this.resetForm();
  }

  editAchievement(achievement: ClubAchievement): void {
    this.editingAchievementId.set(achievement.id);
    this.achievementForm.set({
      title: achievement.title,
      year: achievement.year,
      category: achievement.category,
      description: achievement.description
    });
  }

  cancelAchievementEdit(): void {
    this.editingAchievementId.set(null);
    this.resetAchievementForm();
  }

  submitForm(): void {
    if (!this.isLoggedIn()) {
      return;
    }

    const form = this.form();
    if (!form.title || !form.date || !form.venue || !form.description) {
      return;
    }

    const editingId = this.editingEventId();
    if (editingId) {
      this.eventsService.updateEvent(this.clubId(), editingId, form);
    } else {
      this.eventsService.addEvent(this.clubId(), form);
    }

    this.events.set(this.eventsService.getEvents(this.clubId()));
    this.cancelEdit();
  }

  submitAchievementForm(): void {
    if (!this.isLoggedIn()) {
      return;
    }

    const form = this.achievementForm();
    if (!form.title || !form.year || !form.category || !form.description) {
      return;
    }

    const editingId = this.editingAchievementId();
    if (editingId) {
      this.eventsService.updateAchievement(this.clubId(), editingId, form);
    } else {
      this.eventsService.addAchievement(this.clubId(), form);
    }

    this.achievements.set(this.eventsService.getAchievements(this.clubId()));
    this.cancelAchievementEdit();
  }

  logout(): void {
    this.authService.logout(this.clubId());
    this.isLoggedIn.set(false);
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  private resetForm(): void {
    this.form.set({
      title: '',
      date: '',
      venue: '',
      description: ''
    });
  }

  private resetAchievementForm(): void {
    this.achievementForm.set({
      title: '',
      year: '',
      category: 'Achievement',
      description: ''
    });
  }

  private startCarousel(): void {
    this.carouselTimer = setInterval(() => {
      const gallerySize = this.eventGallery().length;
      if (gallerySize > 1) {
        this.activeGalleryIndex.update((index) => (index + 1) % gallerySize);
      }
    }, 3200);
  }

  private stopCarousel(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
      this.carouselTimer = null;
    }
  }

  private restartCarousel(): void {
    this.stopCarousel();
    if (this.eventGallery().length > 1) {
      this.startCarousel();
    }
  }
}
