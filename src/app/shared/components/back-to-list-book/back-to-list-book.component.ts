import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-to-list-book',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './back-to-list-book.component.html',
  styleUrls: ['./back-to-list-book.component.scss'],
})
export class BackToListComponentBook {}
