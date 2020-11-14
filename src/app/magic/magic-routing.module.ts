import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsListComponent } from './cards-list/cards-list.component';
import { SetsListComponent } from './sets-list/sets-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', component: CardsListComponent },
  { path: 'sets', component: SetsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagicRoutingModule { }
