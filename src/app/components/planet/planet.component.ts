import { Component, Input } from '@angular/core';
import { Planet } from '../../service/model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
  @Input() planetList!: Planet[];
}
