import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: '**', redirectTo: '' }
];