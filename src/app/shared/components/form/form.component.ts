import { Component, EventEmitter, Output, input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Publisher } from '../../../interfaces/publisher.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  publisher = input<Publisher| null>(null);

  form!: FormGroup;

    years: number[] = [];


  @Output() done = new EventEmitter<Publisher>();

  ngOnInit(): void {
    this.generateYears();
    this.form = new FormGroup({
      title: new FormControl<string>(this.publisher()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
      year: new FormControl<number | null>(this.publisher()?.year ?? null, {
        validators: Validators.required,
      }),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Todos os campos são obrigatórios!'); 
      return;
    }

    const publisher = this.form.value as Publisher;
    this.done.emit(publisher);
  }

  generateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = 1970; year <= currentYear; year++) {
      this.years.push(year);
    }
  }
}
