import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { PeoplePageComponent } from './pages/people-page/people.page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { UtilPageComponent } from './pages/util-page/util-page.component';
import { ButtonSignalComponent } from './components/button-signal.component';
import { FilmPageComponent } from './pages/film-page/film-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmDetailsComponent } from './pages/film-page/film-details/film-details.component';
import { RelaseDayUntilNowPipe } from './pages/film-page/film-details/pipe/relase-day-until-now.pipe';
import { PeopleDetailsComponent } from './pages/people-page/people-details/people-details.component';
import { PlanetDetailsComponent } from './pages/planet-page/planet-details/planet-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PeoplePageComponent,
    TabsComponent,
    PlanetPageComponent,
    HeaderComponent,
    UtilPageComponent,
    FilmPageComponent,
    FilmDetailsComponent,
    RelaseDayUntilNowPipe,
    PeopleDetailsComponent,
    PlanetDetailsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ButtonSignalComponent,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
