import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class SwapiService {
  protected readonly host = `${environment.hostSWAPI}api`;

  constructor(protected httpClient: HttpClient) {}
}
