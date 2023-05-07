import { Component } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly iconName = environment.production?'icon-check-mark-2-circle':'icon-robot-wink-1'
}
