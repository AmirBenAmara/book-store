import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookList } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  apiUrl: string = '/api/v1/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookList> {
    return this.http.get<BookList>(this.apiUrl + 'books');
  }

  getBookDetail(id: any): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + 'books/' + id);
  }
}
