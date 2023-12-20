import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorList } from '../models/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  apiUrl: string = '/api/v1/';

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<AuthorList> {
    return this.http.get<AuthorList>(this.apiUrl + 'authors');
  }
}
