import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { initLibsSwapi } from './swapi.actions';

@Injectable({ providedIn: 'root' })
export class SwapiFacade {
  constructor(private store: Store) {}

  init() {
    this.store.dispatch(initLibsSwapi());
  }

  loadSwapi() {
    this.store.dispatch(initLibsSwapi());
  }

  loadPeoplePage(page: number): void {
    // this.store.dispatch(loadPeoplePage({ page }));
  }
}
