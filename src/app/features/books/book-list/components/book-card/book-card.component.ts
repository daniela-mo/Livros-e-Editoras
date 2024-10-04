import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../../../../interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  book = input.required<Book>();

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  bookTitle = computed(() => this.book().title);
  bookAuthor = computed(() => this.book().author);
  bookYear = computed(() => this.book().year);

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
