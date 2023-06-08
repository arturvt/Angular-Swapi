import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as LibsSwapiActions from './swapi.actions';
import { LibsSwapiEntity } from './swapi.models';

export const LIBS_SWAPI_FEATURE_KEY = 'libsSwapi';

export interface LibsSwapiState extends EntityState<LibsSwapiEntity> {
  selectedId?: string | number; // which LibsSwapi record has been selected
  loaded: boolean; // has the LibsSwapi list been loaded
  error?: string | null; // last known error (if any)
}

export interface LibsSwapiPartialState {
  readonly [LIBS_SWAPI_FEATURE_KEY]: LibsSwapiState;
}

export const libsSwapiAdapter: EntityAdapter<LibsSwapiEntity> = createEntityAdapter<LibsSwapiEntity>();

export const initialLibsSwapiState: LibsSwapiState = libsSwapiAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialLibsSwapiState,
  on(LibsSwapiActions.initLibsSwapi, (state) => ({ ...state, loaded: false, error: null })),
  on(LibsSwapiActions.loadLibsSwapiSuccess, (state, { libsSwapi }) => libsSwapiAdapter.setAll(libsSwapi, { ...state, loaded: true })),
  on(LibsSwapiActions.loadLibsSwapiFailure, (state, { error }) => ({ ...state, error }))
);

export function libsSwapiReducer(state: LibsSwapiState | undefined, action: Action) {
  return reducer(state, action);
}
