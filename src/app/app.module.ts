import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { PeoplePageComponent } from './pages/people-page/people.page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { UtilPageComponent } from './pages/util-page/util-page.component';
import { ButtonSignalComponent } from './components/button-signal.component';

@NgModule({
  declarations: [AppComponent, PeoplePageComponent, TabsComponent, PlanetPageComponent, HeaderComponent, UtilPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ButtonSignalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
