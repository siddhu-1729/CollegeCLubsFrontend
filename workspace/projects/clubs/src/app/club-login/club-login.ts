import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CLUB_MAP } from '../data/clubs.data';
import { ClubAuthService } from '../services/club-auth.service';

@Component({
  selector: 'app-club-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './club-login.html',
  styleUrl: './club-login.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClubLogin {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly authService = inject(ClubAuthService);

  readonly clubId = signal(this.route.snapshot.paramMap.get('clubId') ?? '');
  readonly club = computed(() => CLUB_MAP[this.clubId()]);

  username = '';
  password = '';
  error = '';

  submit(): void {
    this.error = '';
    const ok = this.authService.login(this.clubId(), this.username, this.password);
    if (!ok) {
      this.error = 'Invalid username or password for this club.';
      return;
    }

    this.router.navigate(['/club', this.clubId()]);
  }
}
