import { Injectable } from '@angular/core';
import { Book, BookSlice } from '../model/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl: string;
  books: Book[];

  public books$ = new Subject<BookSlice>();

  constructor(private http: HttpClient) {
    this.books = [];
    for (let i = 1; i < 20; i++) {
      this.books.push({name: `Book${i}`, author: `Author${i}`, price: i});
    }
  }

  public loadBooks(setSize: number, firstRec: number): void {
    console.log(`Slicing book array ${firstRec} , ${firstRec + setSize}`);
    setTimeout(() => {
      this.books$.next({books: this.books.slice(firstRec, firstRec + setSize), totalNumberOfBooks: this.books.length});
    }, 1000);
  }
}
