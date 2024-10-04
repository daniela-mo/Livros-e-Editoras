import { Component, inject, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { NoItemsComponent } from './components/no-items/no-items.component';
import { Publisher } from '../../../interfaces/publisher.interface';
import { PublishersService } from '../../../shared/services/publishers.service';
import { ConfirmationDialogService } from '../../../shared/services/confirmation-dialog.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  publishers = signal<Publisher[]>(
    inject(ActivatedRoute).snapshot.data['publisher']
  );

  publishersService = inject(PublishersService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  onEdit(publisher: Publisher) {
    this.router.navigate(['/edit-publisher', publisher.id]);
  }

  onDelete(publisher: Publisher) {
    this.confirmationDialogService
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.publishersService.delete(publisher.id).subscribe(() => {
          this.publishersService.getAll().subscribe((publishers) => {
            this.publishers.set(publishers);
          });
        });
      });
  }
}
