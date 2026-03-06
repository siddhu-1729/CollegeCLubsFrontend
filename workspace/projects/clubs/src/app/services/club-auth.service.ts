import { Injectable } from '@angular/core';
import { CLUB_MAP } from '../data/clubs.data';

const SESSION_KEY = 'clubs-auth-sessions';

@Injectable({
  providedIn: 'root'
})
export class ClubAuthService {
  private getSessions(): Record<string, boolean> {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) {
      return {};
    }

    try {
      return JSON.parse(raw) as Record<string, boolean>;
    } catch {
      return {};
    }
  }

  private saveSessions(sessions: Record<string, boolean>): void {
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessions));
  }

  isLoggedIn(clubId: string): boolean {
    return !!this.getSessions()[clubId];
  }

  login(clubId: string, username: string, password: string): boolean {
    const club = CLUB_MAP[clubId];
    if (!club) {
      return false;
    }

    const valid = username === club.credentials.username && password === club.credentials.password;
    if (!valid) {
      return false;
    }

    const sessions = this.getSessions();
    sessions[clubId] = true;
    this.saveSessions(sessions);
    return true;
  }

  logout(clubId: string): void {
    const sessions = this.getSessions();
    delete sessions[clubId];
    this.saveSessions(sessions);
  }
}
