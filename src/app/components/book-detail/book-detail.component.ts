import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  @Input()
  bookId: any;
  book: Book;

  constructor(
    private bookServices: BookService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
      this.getBookDetail(this.bookId);
    });
  }

  getBookDetail(id: any) {
    this.bookServices.getBookDetail(id).subscribe((res) => {
      this.book = res;
      console.log(this.book);
    });
  }

  goBack() {}
}
