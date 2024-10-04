import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Publisher } from '../../../../../interfaces/publisher.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  publisher = input.required<Publisher>();

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  publisherTitle = computed(() => this.publisher().title);
  foundationYear = computed(() => this.publisher().year); 

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
