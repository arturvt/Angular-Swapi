import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relaseDayUntilNow',
})
export class RelaseDayUntilNowPipe implements PipeTransform {
  transform(value: string): string {
    return `${value} (${this.getDaysUntilNow(value)} days ago)`;
  }

  getDaysUntilNow(value: string): number {
    const today = new Date();
    const releaseDate = new Date(value);
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((today.getTime() - releaseDate.getTime()) / millisecondsInDay));
  }
}
