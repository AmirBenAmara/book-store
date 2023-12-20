import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author.model';
import { Publisher } from 'src/app/models/publisher.model';
import { AuthorService } from 'src/app/services/author.service';
import { PublisherService } from 'src/app/services/publisher.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss'],
})
export class AddBookModalComponent {
  addBookForm: FormGroup;
  publishers: Publisher[];
  authors: Author[];

  constructor(
    private fb: FormBuilder,
    private authorServices: AuthorService,
    private publisherServices: PublisherService,
    public dialogRef: MatDialogRef<AddBookModalComponent>
  ) {}

  ngOnInit(): void {
    this.getAuthorsList();
    this.getPublisherList();
    this.addBookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      isbn: ['', Validators.required],
      tags: this.fb.array([]),
      price: [null, [Validators.required, Validators.min(0)]],
      authors: [[], Validators.required],
      publishers: [[], Validators.required],
    });
  }

  getAuthorsList() {
    this.authorServices.getAuthors().subscribe((res) => {
      this.authors = res.data;
    });
  }

  getPublisherList() {
    this.publisherServices.getPublishers().subscribe((res) => {
      this.publishers = res.data;
    });
  }

  get tags(): FormArray {
    return this.addBookForm.get('tags') as FormArray;
  }

  addTag(tag: string) {
    this.tags.push(this.fb.control(tag, Validators.required));
  }

  onSubmit() {
    if (this.addBookForm.valid) {
      this.dialogRef.close(this.addBookForm.value);
    }
  }
}
