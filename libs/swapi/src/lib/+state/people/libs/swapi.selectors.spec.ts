import { LibsSwapiEntity } from './swapi.models';
import { libsSwapiAdapter, LibsSwapiPartialState, initialLibsSwapiState } from './swapi.reducer';
import * as LibsSwapiSelectors from './swapi.selectors';

describe('LibsSwapi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLibsSwapiId = (it: LibsSwapiEntity) => it.id;
  const createLibsSwapiEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as LibsSwapiEntity);

  let state: LibsSwapiPartialState;

  beforeEach(() => {
    state = {
      libsSwapi: libsSwapiAdapter.setAll(
        [createLibsSwapiEntity('PRODUCT-AAA'), createLibsSwapiEntity('PRODUCT-BBB'), createLibsSwapiEntity('PRODUCT-CCC')],
        {
          ...initialLibsSwapiState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('LibsSwapi Selectors', () => {
    it('selectAllLibsSwapi() should return the list of LibsSwapi', () => {
      const results = LibsSwapiSelectors.selectAllLibsSwapi(state);
      const selId = getLibsSwapiId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = LibsSwapiSelectors.selectEntity(state) as LibsSwapiEntity;
      const selId = getLibsSwapiId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectLibsSwapiLoaded() should return the current "loaded" status', () => {
      const result = LibsSwapiSelectors.selectLibsSwapiLoaded(state);

      expect(result).toBe(true);
    });

    it('selectLibsSwapiError() should return the current "error" state', () => {
      const result = LibsSwapiSelectors.selectLibsSwapiError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
