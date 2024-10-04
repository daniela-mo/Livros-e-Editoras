import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-no-items-book',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './no-items-book.component.html',
  styleUrl: './no-items-book.component.scss'
})
export class NoItemsComponentBook {

}
