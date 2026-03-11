import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLUBS } from '../data/clubs.data';

const CLUBS_REVEALED_KEY = 'clubs-home-revealed';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('clubsSection') private clubsSection?: ElementRef<HTMLElement>;

  readonly clubs = CLUBS;
  clubsVisible = this.getStoredRevealState();

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const section = this.clubsSection?.nativeElement;
    if (!section || this.clubsVisible || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.revealClubs();
      },
      {
        threshold: 0.2
      }
    );

    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  revealClubs(): void {
    if (this.clubsVisible) {
      return;
    }

    this.clubsVisible = true;
    localStorage.setItem(CLUBS_REVEALED_KEY, 'true');
    this.observer?.disconnect();
    this.observer = undefined;
  }

  trackByClub(_: number, club: { id: string }): string {
    return club.id;
  }

  private getStoredRevealState(): boolean {
    return localStorage.getItem(CLUBS_REVEALED_KEY) === 'true';
  }
}
