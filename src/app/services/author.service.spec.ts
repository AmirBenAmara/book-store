import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthorService } from './author.service';
import { AuthorList } from '../models/author.model';
import data from '../../mocks/data/authors/index';

describe('AuthorService', () => {
  let service: AuthorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService],
    });
    service = TestBed.inject(AuthorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve publishers from the API', () => {
    const mockAuthorList: AuthorList = data;
    service.getAuthors().subscribe((author) => {
      expect(author).toEqual(mockAuthorList);
    });

    const request = httpMock.expectOne(`${service.apiUrl}authors`);
    expect(request.request.method).toBe('GET');
    request.flush(mockAuthorList);
  });
  
});
