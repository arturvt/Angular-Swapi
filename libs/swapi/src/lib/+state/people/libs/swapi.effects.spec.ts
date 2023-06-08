import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as LibsSwapiActions from './swapi.actions';
import { LibsSwapiEffects } from './swapi.effects';

describe('LibsSwapiEffects', () => {
  let actions: Observable<Action>;
  let effects: LibsSwapiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [LibsSwapiEffects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(LibsSwapiEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: LibsSwapiActions.initLibsSwapi() });

      const expected = hot('-a-|', { a: LibsSwapiActions.loadLibsSwapiSuccess({ libsSwapi: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
