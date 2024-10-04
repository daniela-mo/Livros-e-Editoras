import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from '../../../shared/components/form/form.component';
import { BackToListComponent } from '../../../shared/components/back-to-list/back-to-list.component';
import { Publisher } from '../../../interfaces/publisher.interface';
import { PublishersService } from '../../../shared/services/publishers.service';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  publishersService = inject(PublishersService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);




  
  onSubmit(publisher: Publisher) {
    this.publishersService.post(publisher).subscribe(() => {
      this.matSnackBar.open('Editora criada com sucesso!', 'Ok');

      this.router.navigateByUrl('/publishers');
    });
  }
}
