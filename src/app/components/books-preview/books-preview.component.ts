import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-preview',
  templateUrl: './books-preview.component.html',
  styleUrls: ['./books-preview.component.scss'],
})
export class BooksPreviewComponent implements OnInit {
  books: Book[];
  books$: Observable<Book[]>;

  constructor(
    private bookServices: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList() {
    this.bookServices.getBooks().subscribe((res) => {
      this.books = res.data;
      console.log(this.books);
    });
  }

  selectBook(bookId: any) {
    this.router.navigate(['/detail', bookId]);
  }
}
