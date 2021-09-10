export interface Book {
  name: string;
  author: string;
  price: number;
  self?: string;
}
export interface BookSlice {
  books: Book[];
  totalNumberOfBooks: number;
}
