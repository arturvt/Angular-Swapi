import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as LibsSwapiActions from './swapi.actions';
import * as LibsSwapiFeature from './swapi.reducer';

@Injectable()
export class LibsSwapiEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LibsSwapiActions.initLibsSwapi),
      switchMap(() => of(LibsSwapiActions.loadLibsSwapiSuccess({ libsSwapi: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(LibsSwapiActions.loadLibsSwapiFailure({ error }));
      })
    )
  );
}
