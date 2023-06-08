import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLibsSwapi from './+state/people/libs/swapi.reducer';
import { LibsSwapiEffects } from './+state/people/libs/swapi.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLibsSwapi.LIBS_SWAPI_FEATURE_KEY, fromLibsSwapi.libsSwapiReducer),
    EffectsModule.forFeature([LibsSwapiEffects]),
  ],
})
export class SwapiModule {}
