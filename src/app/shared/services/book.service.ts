import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private localStorageKey = 'books';

  getBooks(): Book[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  addBook(book: Book): void {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem(this.localStorageKey, JSON.stringify(books));
  }

  updateBook(updatedBook: Book): void {
    const books = this.getBooks().map(book => 
      book.id === updatedBook.id ? updatedBook : book
    );
    localStorage.setItem(this.localStorageKey, JSON.stringify(books));
  }

  deleteBook(id: string): void {
    const books = this.getBooks().filter(book => book.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(books));
  }

  getBookById(id: string): Book | undefined {
    return this.getBooks().find(book => book.id === id);
  }
}
