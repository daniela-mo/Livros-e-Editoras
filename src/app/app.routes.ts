import { Routes } from '@angular/router';
import { ListComponent } from './features/publishers/list/list.component'; 
import { BookListComponent } from './features/books/book-list/book-list.component';
import { getPublishers } from './shared/resolvers/resolvers/get-publishers.resolver';
import { getPublisher } from './shared/resolvers/resolvers/get-publisher.resolver';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
  },
  {
    path: 'publishers',
    resolve: {
      publisher: getPublishers
    },
    loadComponent: () =>
      import('./features/publishers/list/list.component').then(
        (m) => m.ListComponent
      ),
  },
  {
    path: 'create-publisher',
    loadComponent: () =>
      import('./features/publishers/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-publisher/:id',
    resolve: {
      publisher: getPublisher,
    },
    loadComponent: () =>
      import('./features/publishers/edit/edit.component').then((m) => m.EditComponent),
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./features/books/book-list/book-list.component').then(
        (m) => m.BookListComponent
      ),
  },
  {
    path: 'books/create',
    loadComponent: () =>
      import('./features/books/book-create/book-create.component').then(
        (m) => m.CreateBookComponent
      ),
  },
  {
    path: 'edit-book/:id',
    loadComponent: () =>
      import('./features/books/book-edit/book-edit.component').then(
        (m) => m.EditBookComponent
      ),
  },
];
