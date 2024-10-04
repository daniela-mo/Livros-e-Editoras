import {  Component, EventEmitter, Output, input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../../interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    
   ],

  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  book = input<Book | null>(null);

  form!: FormGroup;

  years: number[] = [];

  @Output() done = new EventEmitter<Book>();

  ngOnInit(): void {
    this.generateYears();
    this.form = new FormGroup({
      title: new FormControl<string>(this.book()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      author: new FormControl<string>(this.book()?.author ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      year: new FormControl<number | null>(this.book()?.year ?? null, {
        validators: Validators.required,
      }),
      
    });
  }

  onSubmit() {
    const book: Book = {
      id: this.generateId(), 
      ...this.form.value,
    };
    this.done.emit(book); 
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);  }

    generateYears() {
      const currentYear = new Date().getFullYear();
      for (let year = 1990; year <= currentYear; year++) {
        this.years.push(year);
      }
    }
}
