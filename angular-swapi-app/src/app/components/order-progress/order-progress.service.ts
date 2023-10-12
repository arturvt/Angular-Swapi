import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackOrder } from './order-model';

@Injectable({
  providedIn: 'root',
})
export class OrderProgressService {
  constructor(private httpClient: HttpClient) {}

  getOrder(status?: string): Observable<TrackOrder> {
    return this.httpClient.get<TrackOrder>('/api/util/order', {
      params: { status },
    });
  }
}
