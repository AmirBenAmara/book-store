import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';

@Component({
  selector: 'app-books-preview',
  templateUrl: './books-preview.component.html',
  styleUrls: ['./books-preview.component.scss'],
})
export class BooksPreviewComponent implements OnInit {
  books: Book[];

  constructor(
    private bookServices: BookService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList() {
    this.bookServices.getBooks().subscribe((res) => {
      this.books = res.data;
    });
  }

  selectBook(bookId: any) {
    this.router.navigate(['/detail', bookId]);
  }

  openAddBookModal(): void {
    const dialogRef = this.dialog.open(AddBookModalComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
