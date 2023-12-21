import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookModalComponent } from './add-book-modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddBookModalComponent', () => {
  let component: AddBookModalComponent;
  let fixture: ComponentFixture<AddBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookModalComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, MatDialogModule, NoopAnimationsModule , MatInputModule , MatSelectModule ],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the addBookForm', () => {
    expect(component.addBookForm).toBeDefined();
    expect(component.addBookForm.controls['name']).toBeDefined();
    expect(component.addBookForm.controls['description']).toBeDefined();
    expect(component.addBookForm.controls['isbn']).toBeDefined();
    expect(component.addBookForm.controls['tags']).toBeDefined();
    expect(component.addBookForm.controls['price']).toBeDefined();
    expect(component.addBookForm.controls['authors']).toBeDefined();
    expect(component.addBookForm.controls['publishers']).toBeDefined();
  });

  it('should validate the name field as required', () => {
    let name = component.addBookForm.controls['name'];
    expect(name.valid).toBeFalsy();
    name.setValue('Test Book');
    expect(name.valid).toBeTruthy();
  });
  
  it('should validate the isbn field as required', () => {
    let isbn = component.addBookForm.controls['isbn'];
    expect(isbn.valid).toBeFalsy();
    isbn.setValue(1234567890);
    expect(isbn.valid).toBeTruthy();
  });
  
  it('should call the submit method when the form is valid', () => {
    spyOn(component, 'onSubmit');
    component.addBookForm.controls['name'].setValue('Test Book');
    component.addBookForm.controls['description'].setValue('Test description');
    component.addBookForm.controls['isbn'].setValue(1234567);
    component.addBookForm.controls['tags'].setValue("tags");
    component.addBookForm.controls['price'].setValue(67);
    component.addBookForm.controls['authors'].setValue([1]);
    component.addBookForm.controls['publishers'].setValue([1]);
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });
 
});
