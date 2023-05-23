import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeoplePageComponent } from './pages/people/people.page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', title: 'Swapi - People', component: PeoplePageComponent },
  { path: 'planet', title: 'Swapi - Planet', component: PlanetPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
