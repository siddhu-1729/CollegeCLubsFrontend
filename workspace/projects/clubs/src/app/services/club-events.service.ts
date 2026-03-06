import { Injectable } from '@angular/core';
import { CLUB_MAP, ClubEvent } from '../data/clubs.data';

const EVENTS_KEY = 'clubs-events-store';

type EventsStore = Record<string, ClubEvent[]>;

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
}
