import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { PeopleService } from '../../service/people/people.service';
import { People, PeoplePage } from '../../model/people';

@Component({
  templateUrl: './people.page.component.html',
  styleUrls: ['./people.page.component.scss'],
})
export class PeoplePageComponent implements OnInit {
  private currentPage = 1;
  incrementBy = 0;
  peopleResponse!: PeoplePage;
  peopleContent: People[] = [];

  constructor(private swapiService: PeopleService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  isShowMoreVisible(): boolean {
    return this.incrementBy < this.peopleResponse.count;
  }

  showMore(): void {
    this.currentPage++;
    this.loadPeople();
  }

  private loadPeople(): void {
    this.swapiService
      .getPeopleList(this.currentPage)
      .pipe(take(1))
      .subscribe((peopleResponse) => {
        this.incrementBy += peopleResponse.results.length;
        this.peopleResponse = peopleResponse;
        this.peopleContent = this.peopleContent.concat(peopleResponse.results);
      });
  }
}
