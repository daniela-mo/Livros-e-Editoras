import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../interfaces/book.interface';
import { BookFormComponent } from '../../../shared/components/form-book/book-form.component';
import { BackToListComponentBook } from '../../../shared/components/back-to-list-book/back-to-list-book.component';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [BookFormComponent, BackToListComponentBook],
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class EditBookComponent {
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  route = inject(ActivatedRoute);

  book: Book | undefined;

  constructor() {
    const bookId = this.route.snapshot.paramMap.get('id');
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    this.book = books.find((b: Book) => b.id === bookId);
  }

  onSubmit(updatedBook: Book) {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const updatedBooks = books.map((b: Book) =>
      b.id === this.book?.id ? { ...b, ...updatedBook } : b
    );

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    this.matSnackBar.open('Livro editado com sucesso!', 'Ok');
    this.router.navigateByUrl('/books');
  }
}
