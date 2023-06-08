import { createAction, props } from '@ngrx/store';
import { LibsSwapiEntity } from './swapi.models';

export const initLibsSwapi = createAction('[LibsSwapi Page] Init');

export const loadLibsSwapiSuccess = createAction('[LibsSwapi/API] Load LibsSwapi Success', props<{ libsSwapi: LibsSwapiEntity[] }>());

export const loadLibsSwapiFailure = createAction('[LibsSwapi/API] Load LibsSwapi Failure', props<{ error: any }>());
