import { Component, OnInit } from '@angular/core';
import { worker, handlers } from '../mocks/handlers';
import { Book } from './models/book.model';
import { Observable } from 'rxjs';
import { BookService } from './services/book.service';

// Prepend a list of new handlers to this worker instance.
// Past this point, they extend the network behavior.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
