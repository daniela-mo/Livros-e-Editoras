import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from '../../../interfaces/book.interface';
import { BackToListComponentBook } from '../../../shared/components/back-to-list-book/back-to-list-book.component';
import { BookFormComponent } from '../../../shared/components/form-book/book-form.component';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports:[BackToListComponentBook, BookFormComponent],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class CreateBookComponent {
  router = inject(Router);
  matSnackBar = inject(MatSnackBar);

  addBookToLocalStorage(book: Book) {
    const books = this.getBooksFromLocalStorage();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  getBooksFromLocalStorage(): Book[] {
    return JSON.parse(localStorage.getItem('books') || '[]');
  }

  onSubmit(book: Book) {
    if (book) {
      this.addBookToLocalStorage(book); 
      this.matSnackBar.open('Livro criado com sucesso!', 'Ok', {
        duration: 3000, 
      });
      this.router.navigateByUrl('/livros'); 
        } else {
      this.matSnackBar.open('Erro ao criar livro. Tente novamente.', 'Ok', {
        duration: 3000,
      });
    }
  }
}
