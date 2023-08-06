import { Routes } from '@angular/router';
import { PeoplePageComponent } from './pages/people-page/people.page.component';
import { PeopleDetailsComponent } from './pages/people-page/people-details/people-details.component';
import { PlanetDetailsComponent } from './pages/planet-page/planet-details/planet-details.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { FilmDetailsComponent } from './pages/film-page/film-details/film-details.component';
import { UtilPageComponent } from './pages/util-page/util-page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  {
    path: 'people',
    title: 'Swapi - People',
    children: [
      { path: '', component: PeoplePageComponent },
      { path: ':id', component: PeopleDetailsComponent },
    ],
  },
  {
    path: 'planet',
    title: 'Swapi - Planet',
    children: [
      { path: '', component: PlanetPageComponent },
      { path: ':id', component: PlanetDetailsComponent, pathMatch: 'full' },
    ],
  },
  {
    path: 'film',
    title: 'Swapi - Film',
    children: [
      { path: '', component: FilmPageComponent },
      { path: ':id', component: FilmDetailsComponent, pathMatch: 'full' },
    ],
  },
  {
    path: 'util',
    title: 'Swapi - Util',
    component: UtilPageComponent,
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update-page/update/update.module').then((m) => m.UpdateModule),
  },
];
