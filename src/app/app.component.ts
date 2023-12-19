import { Component, OnInit } from '@angular/core';
import { worker, handlers } from '../mocks/handlers';
import { Book } from './models/book.model';
import { Observable } from 'rxjs';
import { BookService } from './services/book.service';

// Prepend a list of new handlers to this worker instance.
// Past this point, they extend the network behavior.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  books: Book[];
  books$: Observable<Book[]>;

  constructor(private bookServices: BookService) {}

  ngOnInit(): void {
    this.bookServices.getBooks().subscribe((res) => {
      this.books = res.data;
      console.log(this.books);
    });
  }
}
