import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderProgressService } from './order-progress.service';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-progress',
  templateUrl: './order-progress.component.html',
})
export class OrderProgressComponent implements OnInit, OnChanges {
  constructor(private orderProgressService: OrderProgressService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const state = this.activatedRoute.snapshot.params['state'] ?? 'open';
    console.log('Component Started');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['state']) {
      console.log(`--> Changed ${changes}`);
    }
  }
}
