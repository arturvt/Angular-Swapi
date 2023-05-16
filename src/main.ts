import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {defineCustomElements} from '@swisscom/sdx/dist/js/webcomponents/loader';
import {AppModule} from './app/app.module';
import {initFirebase} from "./initFirebase";

defineCustomElements();
initFirebase();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
