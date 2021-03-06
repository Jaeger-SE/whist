import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import {AnnoncesService} from "./annonces.service";
import { PlayersSetupComponent } from './players-setup/players-setup.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import {JoueursService} from "./joueurs.service";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'scoreboard', component: ScoreBoardComponent },
  { path: '', component: PlayersSetupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AddAnnonceComponent,
    PlayersSetupComponent,
    ScoreBoardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AnnoncesService, JoueursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
