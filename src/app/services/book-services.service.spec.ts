import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';
import { Book, BookList } from '../models/book.model';
import data from '../../mocks/data/books';

describe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });

    service = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBooks() should return a list of books', () => {
    const mockBooks: BookList = data;

    service.getBooks().subscribe((books) => {
      expect(books.data.length).toBe(1);
      expect(books).toEqual(mockBooks);
    });

    const req = httpTestingController.expectOne(service.apiUrl + 'books');
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
  });

  it('getBookDetail() should return book details', () => {
    const mockBook: Book = data.data[0];

    service.getBookDetail(1).subscribe((book) => {
      expect(book).toEqual(mockBook);
    });

    const req = httpTestingController.expectOne(service.apiUrl + 'books/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockBook);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
