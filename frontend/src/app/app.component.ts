import { Component, OnInit } from '@angular/core';
import { Book, BookSlice } from './model/book';
import { BookService } from './services/book.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  books: Book[];
  totalRecords: number;
  loading = true;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.books$.subscribe(b => {
      this.books = b.books;
      this.totalRecords = b.totalNumberOfBooks;
      this.loading = false;
      console.log(`${this.books.length} Books have been loaded of ${this.totalRecords}`);
    });
  }

  loadBooks($event: LazyLoadEvent): void {
    this.loading = true;
    console.log(`Event is: ${JSON.stringify($event)}`);
    this.bookService.loadBooks($event.rows, $event.first);
  }

}
