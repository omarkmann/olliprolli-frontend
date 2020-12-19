import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {AppRoutingModule} from './app-routing.module';
import {NumberGeneratorComponent} from './components/number-generator/number-generator.component';
import {MatButtonModule} from '@angular/material/button';
import {PlayerStatsComponent} from './components/player-stats/player-stats.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {PlayerStatsDetailComponent} from './components/player-stats-detail/player-stats-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; // CLI imports AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumberGeneratorComponent,
    PlayerStatsComponent,
    PlayerStatsDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule,
    MatMenuModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
