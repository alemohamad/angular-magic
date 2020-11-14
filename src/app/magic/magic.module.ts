import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagicRoutingModule } from './magic-routing.module';

import { HomeComponent } from './home/home.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { SetsListComponent } from './sets-list/sets-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsListComponent,
    SetsListComponent
  ],
  imports: [
    CommonModule,
    MagicRoutingModule
  ]
})
export class MagicModule { }
