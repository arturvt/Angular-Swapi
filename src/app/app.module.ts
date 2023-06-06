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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmDetailsComponent } from './pages/film-page/film-details/film-details.component';
import { RelaseDayUntilNowPipe } from './pages/film-page/film-details/pipe/relase-day-until-now.pipe';
import { PeopleDetailsComponent } from './pages/people-page/people-details/people-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  {
    path: 'people',
    title: 'Swapi - People',
    children: [
      {
        path: '',
        component: PeoplePageComponent,
      },
      {
        path: ':id',
        component: PeopleDetailsComponent,
      },
    ],
  },
  {
    path: 'planet',
    title: 'Swapi - Planet',
    component: PlanetPageComponent,
  },
  {
    path: 'film',
    title: 'Swapi - Film',
    data: { animation: '3' },
    children: [
      { path: '', component: FilmPageComponent },
      { path: ':episode_id', component: FilmDetailsComponent },
    ],
  },
  {
    path: 'util',
    title: 'Swapi - Util',
    component: UtilPageComponent,
  },
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
    PeopleDetailsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, RouterModule.forRoot(routes), ButtonSignalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
