import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl: string = '/api/v1/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl + "books");
  }
}
