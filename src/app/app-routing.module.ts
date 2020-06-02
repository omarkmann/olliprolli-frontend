import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NumberGeneratorComponent} from './components/number-generator/number-generator.component';
import {PlayerStatsComponent} from './components/player-stats/player-stats.component';
import {PlayerStatsDetailComponent} from './components/player-stats-detail/player-stats-detail.component'; // CLI imports router

const routes: Routes = [
  {path: '', redirectTo: '/number-generator', pathMatch: 'full'},
  {path: 'number-generator', component: NumberGeneratorComponent},
  {path: 'player-stats', component: PlayerStatsComponent},
  {path: 'player-stats/:playerName', component: PlayerStatsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
