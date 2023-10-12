import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderProgressService } from './order-progress.service';
import { OrderStep, TrackOrder } from './order-model';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-progress',
  templateUrl: './order-progress.component.html',
})
export class OrderProgressComponent implements OnInit, OnChanges {
  trackOrder: TrackOrder;
  constructor(private orderProgressService: OrderProgressService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const state = this.activatedRoute.snapshot.params['state'] ?? 'open';
    console.log('Component Started');
    this.orderProgressService
      .getOrder(state)
      .pipe(take(1))
      .subscribe((trackOrder) => {
        this.trackOrder = trackOrder;
      });
  }

  getTitle(orderStep: OrderStep): string {
    if (orderStep.status === 'NOT_STARTED') {
      return orderStep.title;
    }
    console.log('status: ' + orderStep.status);

    const dateString = new Date(orderStep.updated).toLocaleDateString();
    return orderStep.title + ' ' + dateString;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['state']) {
      console.log(`--> Changed ${changes}`);
    }
  }
}
