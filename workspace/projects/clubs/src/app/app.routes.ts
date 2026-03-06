import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ClubPage } from './club-page/club-page';
import { ClubLogin } from './club-login/club-login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'club/:clubId', component: ClubPage },
  { path: 'club/:clubId/login', component: ClubLogin },

  { path: 'codingclub', redirectTo: 'club/codingclub', pathMatch: 'full' },
  { path: 'csi', redirectTo: 'club/csi', pathMatch: 'full' },
  { path: 'ieee', redirectTo: 'club/ieee', pathMatch: 'full' },
  { path: 'iei', redirectTo: 'club/iei', pathMatch: 'full' },
  { path: 'iete', redirectTo: 'club/iete', pathMatch: 'full' },
  { path: 'iste', redirectTo: 'club/iste', pathMatch: 'full' },
  { path: 'lolo', redirectTo: 'club/lolo', pathMatch: 'full' },
  { path: 'paiecell', redirectTo: 'club/paiecell', pathMatch: 'full' },
  { path: 'ace', redirectTo: 'club/ace', pathMatch: 'full' },
  { path: 'ame', redirectTo: 'club/ame', pathMatch: 'full' },
  { path: 'amc', redirectTo: 'club/amc', pathMatch: 'full' },
  { path: 'cine', redirectTo: 'club/cine', pathMatch: 'full' },
  { path: 'login', redirectTo: '', pathMatch: 'full' },

  { path: '**', redirectTo: '' }
];
