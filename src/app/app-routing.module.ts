import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksPreviewComponent } from './components/books-preview/books-preview.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

// Define the routes
const routes: Routes = [
  { path: '', component: BooksPreviewComponent },
  { path: 'detail/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
