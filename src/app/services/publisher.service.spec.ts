import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PublisherService } from './publisher.service';
import { PublisherList } from '../models/publisher.model';
import data from '../../mocks/data/publishers/index';

describe('PublisherService', () => {
  let service: PublisherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PublisherService],
    });
    service = TestBed.inject(PublisherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve publishers from the API', () => {
    const mockPublisherList: PublisherList = data;

    service.getPublishers().subscribe((publishers) => {
      expect(publishers).toEqual(mockPublisherList);
    });

    const request = httpMock.expectOne(`${service.apiUrl}publishers`);
    expect(request.request.method).toBe('GET');
    request.flush(mockPublisherList);
  });
});
