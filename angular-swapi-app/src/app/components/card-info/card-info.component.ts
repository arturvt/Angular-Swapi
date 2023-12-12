import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnChanges {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) link: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CardInfoComponent' + changes);
  }
}
