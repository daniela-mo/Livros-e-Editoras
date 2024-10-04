import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../../../shared/components/form/form.component';
import { BackToListComponent } from '../../../shared/components/back-to-list/back-to-list.component';
import { PublishersService } from '../../../shared/services/publishers.service';
import { Publisher } from '../../../interfaces/publisher.interface';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  publishersService = inject(PublishersService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  publisher: Publisher = inject(ActivatedRoute).snapshot.data['publisher'];

  onSubmit(publisher: Publisher) {
    this.publishersService.put(this.publisher.id, publisher).subscribe(() => {
      this.matSnackBar.open('Editora editada com sucesso!', 'Ok');

      this.router.navigateByUrl('/publishers');
    });
  }
}
