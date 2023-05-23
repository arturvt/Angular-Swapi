import { Component } from '@angular/core';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss'],
})
export class PlanetPageComponent {
  goBack(): void {
    console.log('[SWAPI]: go back');
    window.parent.postMessage({ type: 'goBack', sender: 'subhub' }, '*');
  }

  openWebSite(webSite: string) {
    console.log(`go to ${webSite}`);
    window.parent.postMessage(
      {
        type: 'openWebSite',
        payload: {
          url: webSite,
        },
        sender: 'subhub',
      },
      '*'
    );
  }
}
