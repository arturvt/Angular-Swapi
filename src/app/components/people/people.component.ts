import { Component, Input } from '@angular/core';
import { People } from 'src/app/swapi.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  @Input() peopleList!: People[];
}
