import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailComponent } from './book-detail.component';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  const mockActivatedRoute = {
    paramMap: of(new Map([['id', '1']]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BookDetailComponent ],
      providers: [
        { provide: BookService },
        { provide: ActivatedRoute , useValue: mockActivatedRoute}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call getBookDetail on ngOnInit', () => {
    spyOn(component, 'getBookDetail');
    component.ngOnInit();
    expect(component.getBookDetail).toHaveBeenCalledWith('1');
  });
  
});
