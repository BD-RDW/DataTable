import { Injectable } from '@angular/core';
import { Book, BookSlice } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'books';

  constructor(private http: HttpClient) {
  }

  public loadBooksFromServer(setSize: number, firstRec: number, ordderedBy: string): Observable<BookSlice> {
    console.log(`Fetching books ${firstRec} , ${firstRec + setSize}`);
    const ordering = ordderedBy ? ordderedBy : 'name';
    return this.http.get<BooksResponse>(`${this.booksUrl}?page=${(firstRec / setSize)}&size=${setSize}&sort=${ordering}`)
    .pipe(
      map( br => {
        return {books: br._embedded.books.map(bi => {
          return {name: bi.name, author: bi.author, price: bi.price} as Book; } )
            , totalNumberOfBooks: br.page.totalElements } as BookSlice;
      }),
       catchError(this.handleError<boolean>('sessionCreate', false)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }}

interface BooksResponse {
  _embedded: EmbeddedData;
  _links: LinksInfo;
  page: PageInfo;
}
interface PageInfo {
  size: number;
  totalElements: number;
  totalPages: number;
  number: 0;
}
interface LinksInfo {
  first: UrlInfo;
  self: UrlInfo;
  next: UrlInfo;
  last: UrlInfo;
  profile: UrlInfo;
  search: UrlInfo;
}
interface UrlInfo {
  href: string;
}
interface EmbeddedData {
  books: BookInfo[];
}
interface BookInfo extends Book {
  _links: BookUrlInfo;
}
interface BookUrlInfo {
  self: UrlInfo;
  books: UrlInfo;
}
