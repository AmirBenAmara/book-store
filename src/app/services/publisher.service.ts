import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherList } from '../models/publisher.model';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  apiUrl: string = '/api/v1/';

  constructor(private http: HttpClient) {}

  getPublishers(): Observable<PublisherList> {
    return this.http.get<PublisherList>(this.apiUrl + 'publishers');
  }
}
