import { Component, EventEmitter, Inject, NgZone, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({ selector: 'app-tabs', templateUrl: './tabs.component.html' })
export class TabsComponent implements OnInit {
  private selectedTab = 'people';

  @Output() tabChange = new EventEmitter<string>();

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {
    this.selectedTab = this.document.location.pathname.split('/')[1];
  }

  isSelected(id: string): boolean {
    return id === this.selectedTab;
  }

  tabClick = (selected: Node) => {
    const pageName = (<Element>selected).getAttribute('tab-id');
    if (pageName) {
      this.selectedTab = pageName;
      this.zone.run(() => {
        this.router.navigate([pageName]).then(() => {
          this.tabChange.emit(this.selectedTab);
        });
      });
    }
  };
}
