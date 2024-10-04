import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BookCardComponent } from './components/book-card/book-card.component';
import { Router, RouterLink } from '@angular/router';
import { Book } from '../../../interfaces/book.interface';
import { ConfirmationDialogService } from '../../../shared/services/confirmation-dialog.service';
import { BackToListComponentBook } from '../../../shared/components/back-to-list-book/back-to-list-book.component';
import { NoItemsComponentBook } from './components/no-items-book/no-items-book.component';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCardComponent, RouterLink, MatButtonModule, NoItemsComponentBook, BackToListComponentBook],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books = signal<Book[]>(this.getBooksFromLocalStorage());

  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  getBooksFromLocalStorage(): Book[] {
    return JSON.parse(localStorage.getItem('books') || '[]');
  }

  saveBooksToLocalStorage(books: Book[]) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  onEdit(book: Book) {
    console.log('Navegando para a edição do livro com ID:', book.id);
    this.router.navigate(['/edit-book', book.id]);
  }
  

  onDelete(book: Book) {
    this.confirmationDialogService
      .openDialog()
      .subscribe((confirmed) => {
        if (confirmed) {
          const updatedBooks = this.books().filter(b => b.id !== book.id);
          this.saveBooksToLocalStorage(updatedBooks);
          this.books.set(updatedBooks);
        }
      });
  }
}
