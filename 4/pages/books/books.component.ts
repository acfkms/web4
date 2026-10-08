import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [
    { id: 1, title: 'Кобзар', author: 'Тарас Шевченко', pages: 400 },
    { id: 2, title: '1984', author: 'Джордж Орвел', pages: 320 },
    { id: 3, title: 'Метаморфоза, author: 'Франз Кафка', pages: 300 }
  ];
}