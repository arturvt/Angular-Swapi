import { Action } from '@ngrx/store';

import * as LibsSwapiActions from './swapi.actions';
import { LibsSwapiEntity } from './swapi.models';
import { LibsSwapiState, initialLibsSwapiState, libsSwapiReducer } from './swapi.reducer';

describe('LibsSwapi Reducer', () => {
  const createLibsSwapiEntity = (id: string, name = ''): LibsSwapiEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid LibsSwapi actions', () => {
    it('loadLibsSwapiSuccess should return the list of known LibsSwapi', () => {
      const libsSwapi = [createLibsSwapiEntity('PRODUCT-AAA'), createLibsSwapiEntity('PRODUCT-zzz')];
      const action = LibsSwapiActions.loadLibsSwapiSuccess({ libsSwapi });

      const result: LibsSwapiState = libsSwapiReducer(initialLibsSwapiState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = libsSwapiReducer(initialLibsSwapiState, action);

      expect(result).toBe(initialLibsSwapiState);
    });
  });
});
