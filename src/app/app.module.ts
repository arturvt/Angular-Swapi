import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { PeoplePageComponent } from './pages/people-page/people.page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { UtilPageComponent } from './pages/util-page/util-page.component';
import { ButtonSignalComponent } from './components/button-signal.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './pages/film-page/film-details/film-details.component';
import { RelaseDayUntilNowPipe } from './pages/film-page/film-details/pipe/relase-day-until-now.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', title: 'Swapi - People', component: PeoplePageComponent },
  { path: 'planet', title: 'Swapi - Planet', component: PlanetPageComponent },
  {
    path: 'film',
    title: 'Swapi - Film',
    children: [
      { path: '', component: FilmPageComponent },
      { path: ':episode_id', component: FilmDetailsComponent },
    ],
  },
  { path: 'util', title: 'Swapi - Util', component: UtilPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PeoplePageComponent,
    TabsComponent,
    PlanetPageComponent,
    HeaderComponent,
    UtilPageComponent,
    FilmPageComponent,
    FilmDetailsComponent,
    RelaseDayUntilNowPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes), ButtonSignalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
