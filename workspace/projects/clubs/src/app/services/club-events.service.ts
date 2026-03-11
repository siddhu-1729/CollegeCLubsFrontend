import { Injectable } from '@angular/core';
import { CLUB_MAP, ClubAchievement, ClubEvent } from '../data/clubs.data';

const EVENTS_KEY = 'clubs-events-store';
const ACHIEVEMENTS_KEY = 'clubs-achievements-store';

type EventsStore = Record<string, ClubEvent[]>;
type AchievementsStore = Record<string, ClubAchievement[]>;

@Injectable({
  providedIn: 'root'
})
export class ClubEventsService {
  private getStore(): EventsStore {
    const raw = localStorage.getItem(EVENTS_KEY);
    if (raw) {
      try {
        return JSON.parse(raw) as EventsStore;
      } catch {
        return this.seedStore();
      }
    }

    return this.seedStore();
  }

  private seedStore(): EventsStore {
    const seed = Object.fromEntries(
      Object.entries(CLUB_MAP).map(([clubId, club]) => [clubId, [...club.events]])
    ) as EventsStore;

    localStorage.setItem(EVENTS_KEY, JSON.stringify(seed));
    return seed;
  }

  private saveStore(store: EventsStore): void {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(store));
  }

  private getAchievementsStore(): AchievementsStore {
    const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (raw) {
      try {
        return JSON.parse(raw) as AchievementsStore;
      } catch {
        return this.seedAchievementsStore();
      }
    }

    return this.seedAchievementsStore();
  }

  private seedAchievementsStore(): AchievementsStore {
    const seed = Object.fromEntries(
      Object.entries(CLUB_MAP).map(([clubId, club]) => [clubId, [...club.achievements]])
    ) as AchievementsStore;

    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(seed));
    return seed;
  }

  private saveAchievementsStore(store: AchievementsStore): void {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(store));
  }

  getEvents(clubId: string): ClubEvent[] {
    const store = this.getStore();
    return store[clubId] ?? [];
  }

  addEvent(clubId: string, payload: Omit<ClubEvent, 'id'>): void {
    const store = this.getStore();
    const next: ClubEvent = {
      id: crypto.randomUUID(),
      ...payload
    };

    const events = store[clubId] ?? [];
    store[clubId] = [next, ...events];
    this.saveStore(store);
  }

  updateEvent(clubId: string, eventId: string, payload: Omit<ClubEvent, 'id'>): void {
    const store = this.getStore();
    const events = store[clubId] ?? [];

    store[clubId] = events.map((event) =>
      event.id === eventId
        ? {
            id: event.id,
            ...payload
          }
        : event
    );

    this.saveStore(store);
  }

  getAchievements(clubId: string): ClubAchievement[] {
    const store = this.getAchievementsStore();
    return store[clubId] ?? [];
  }

  addAchievement(clubId: string, payload: Omit<ClubAchievement, 'id'>): void {
    const store = this.getAchievementsStore();
    const next: ClubAchievement = {
      id: crypto.randomUUID(),
      ...payload
    };

    const achievements = store[clubId] ?? [];
    store[clubId] = [next, ...achievements];
    this.saveAchievementsStore(store);
  }

  updateAchievement(clubId: string, achievementId: string, payload: Omit<ClubAchievement, 'id'>): void {
    const store = this.getAchievementsStore();
    const achievements = store[clubId] ?? [];

    store[clubId] = achievements.map((achievement) =>
      achievement.id === achievementId
        ? {
            id: achievement.id,
            ...payload
          }
        : achievement
    );

    this.saveAchievementsStore(store);
  }
}
