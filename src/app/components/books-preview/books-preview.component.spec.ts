import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksPreviewComponent } from './books-preview.component';
import { BookService } from 'src/app/services/book.service';
import { HttpClientModule } from '@angular/common/http';
import data from '../../../mocks/data/books/index';

describe('BooksPreviewComponent', () => {
  let component: BooksPreviewComponent;
  let fixture: ComponentFixture<BooksPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksPreviewComponent],
      providers: [{ provide: BookService }],
      imports: [MatDialogModule, RouterTestingModule ,HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksPreviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch books on init', () => {
    spyOn(component, 'getBooksList');
    component.ngOnInit();
    expect(component.getBooksList).toHaveBeenCalled();
  });

  it('should filter book on search', () => {
    component.books = data.data
    const searchEvent = {
      target: { value: 'OCP: Oracle9i Certification Kit' }
    };
    component.onSearchBooks(searchEvent);
    expect(component.filteredBooks.length).toBe(1);
    expect(component.filteredBooks).toEqual([data.data[0]]);
  });

});

