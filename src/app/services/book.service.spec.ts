import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });
  });

  it('should retrieve all books', () => {
    const service: BookService = TestBed.inject(BookService);
    const httpTestingController = TestBed.inject(HttpTestingController);

    service.getBooks().subscribe((books) => {
      expect(books).toBeTruthy();
    });

    const req = httpTestingController.expectOne(service.apiUrl + 'books');
    expect(req.request.method).toEqual('GET');
  });

  it('should retrieve book detail by ID', () => {
    const service: BookService = TestBed.inject(BookService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    const testId = 1;

    service.getBookDetail(testId).subscribe((book) => {
      expect(book).toBeTruthy();
      expect(book.id).toEqual(testId);
    });

    const req = httpTestingController.expectOne(service.apiUrl + 'books/' + testId);
    expect(req.request.method).toEqual('GET');
  });

  afterEach(() => {
    const httpTestingController = TestBed.inject(HttpTestingController);
    httpTestingController.verify();
  });
});
