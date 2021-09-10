import { Component } from '@angular/core';
import { Book, BookSlice } from './model/book';
import { BookService } from './services/book.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  books: Book[];
  totalRecords: number;
  loading = true;

  constructor(private bookService: BookService) { }

  loadBooks($event: LazyLoadEvent): void {
    this.loading = true;
    console.log(`Event is: ${JSON.stringify($event)}`);
    this.bookService.loadBooksFromServer($event.rows, $event.first, $event.sortField).subscribe(
      bs => {
        this.books = bs.books;
        this.totalRecords = bs.totalNumberOfBooks;
        this.loading = false;
      }
    );
  }

}
