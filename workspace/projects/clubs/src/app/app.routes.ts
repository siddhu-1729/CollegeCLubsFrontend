import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Codingclub } from './codingclub/codingclub';
import { CSI } from './csi/csi';
import { IEEE } from './ieee/ieee';
import { IETE } from './iete/iete';
import { IEI } from './iei/iei';
import { ISTE } from './iste/iste';
import { LOLO } from './lolo/lolo';
import { PAIECELL } from './paiecell/paiecell';
import { ACE } from './ace/ace';
import { AME } from './ame/ame';


export const routes: Routes = [
    {path:'', component: Home},
    {path:'codingclub',component:Codingclub},
    {path:'csi',component:CSI},
    {path:'ieee',component:IEEE},
    {path:'iei',component:IEI},
    {path:'iete',component:IETE},
    {path:'iste',component:ISTE},
    {path:'lolo',component:LOLO},
    {path:'paiecell',component:PAIECELL},
    {path:'ace',component:ACE},
    {path:'ame',component:AME}

    
];
