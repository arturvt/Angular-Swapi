import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LIBS_SWAPI_FEATURE_KEY, LibsSwapiState, libsSwapiAdapter } from './swapi.reducer';

// Lookup the 'LibsSwapi' feature state managed by NgRx
export const selectLibsSwapiState = createFeatureSelector<LibsSwapiState>(LIBS_SWAPI_FEATURE_KEY);

const { selectAll, selectEntities } = libsSwapiAdapter.getSelectors();

export const selectLibsSwapiLoaded = createSelector(selectLibsSwapiState, (state: LibsSwapiState) => state.loaded);

export const selectLibsSwapiError = createSelector(selectLibsSwapiState, (state: LibsSwapiState) => state.error);

export const selectAllLibsSwapi = createSelector(selectLibsSwapiState, (state: LibsSwapiState) => selectAll(state));

export const selectLibsSwapiEntities = createSelector(selectLibsSwapiState, (state: LibsSwapiState) => selectEntities(state));

export const selectSelectedId = createSelector(selectLibsSwapiState, (state: LibsSwapiState) => state.selectedId);

export const selectEntity = createSelector(selectLibsSwapiEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);
