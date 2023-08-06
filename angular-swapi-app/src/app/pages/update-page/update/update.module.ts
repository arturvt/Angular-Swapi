import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePageComponent } from '../update-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PeopleUpdateFormComponent } from '../components/PeopleUpdateForm/people-update-form.component';

const routes: Routes = [
  {
    path: '',
    title: 'Swapi - Update',
    component: UpdatePageComponent,
  },
];

@NgModule({
  declarations: [UpdatePageComponent, PeopleUpdateFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UpdateModule {}
