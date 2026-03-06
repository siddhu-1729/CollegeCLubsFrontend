import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CLUB_MAP, ClubEvent } from '../data/clubs.data';
import { ClubAuthService } from '../services/club-auth.service';
import { ClubEventsService } from '../services/club-events.service';

interface EventForm {
  title: string;
  date: string;
  venue: string;
  description: string;
}

@Component({
  selector: 'app-club-page',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './club-page.html',
  styleUrl: './club-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubPage {
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(ClubAuthService);
  private readonly eventsService = inject(ClubEventsService);

  readonly clubId = signal(this.route.snapshot.paramMap.get('clubId') ?? '');
  readonly club = computed(() => CLUB_MAP[this.clubId()]);
  readonly events = signal<ClubEvent[]>(this.eventsService.getEvents(this.clubId()));
  readonly isLoggedIn = signal(this.authService.isLoggedIn(this.clubId()));
  readonly editingEventId = signal<string | null>(null);

  readonly form = signal<EventForm>({
    title: '',
    date: '',
    venue: '',
    description: ''
  });

  trackByEvent(_: number, event: ClubEvent): string {
    return event.id;
  }

  setFormField<K extends keyof EventForm>(key: K, value: EventForm[K]): void {
    this.form.update((form) => ({
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

  logout(): void {
    this.authService.logout(this.clubId());
    this.isLoggedIn.set(false);
  }

  private resetForm(): void {
    this.form.set({
      title: '',
      date: '',
      venue: '',
      description: ''
    });
  }
}
