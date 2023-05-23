import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-swapi';

  ngAfterViewInit(): void {
    console.log('[SWAPI]: Sending ready in 3 seconds');
    setTimeout(() => {
      console.log('[SWAPI]: Sending ready');
      window.parent.postMessage({ type: 'ready', sender: 'subhub' }, '*');
    }, 3000);
  }
}
