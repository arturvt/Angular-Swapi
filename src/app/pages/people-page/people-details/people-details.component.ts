import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../../service/people/people.service';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../../../service/model';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  peopleDetail$: Observable<PeopleResponse> | undefined;
  constructor(private activatedRoute: ActivatedRoute, private service: PeopleService) {}
  ngOnInit() {
    const peopleId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.peopleDetail$ = this.service.getPeople(peopleId);
  }
}
