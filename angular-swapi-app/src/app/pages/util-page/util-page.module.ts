import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilPageComponent } from './util-page.component';
import { OrderSelectorComponent } from './components/order-selector/order-selector.component';
import { OrderProgressComponent } from './components/order-progress/order-progress.component';

const routes: Routes = [
  {
    path: '',
    component: UtilPageComponent,
  },
];

@NgModule({
  declarations: [UtilPageComponent, OrderSelectorComponent, OrderProgressComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UtilPageModule {}
