import { Component } from '@angular/core';

@Component({
  templateUrl: './util-page.component.html',
  styleUrls: ['./util-page.component.scss'],
})
export class UtilPageComponent {
  host = 'https://www.swisscom.ch';
  subHubUrl = '/subhub/?subhublive=';
  branch = 'feature-OCEWLINE-23929-send-events-to-my-swisscom-app';
  selectedOption: string;

  get urlLink(): string {
    return `${this.host}${this.subHubUrl}${this.branch}`;
  }

  goBack(): void {
    console.log('[SWAPI]: go back');
    window.parent.postMessage({ type: 'goBack', sender: 'subhub' }, '*');
  }

  updateBranch = (event: string) => {
    this.branch = event;
  };
  updateUrl = (event: string) => {
    this.subHubUrl = event;
  };

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

  onUpdate(val: string) {
    console.log(`update now I have ${val}`);
    this.selectedOption = val;
  }
}
