import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
}

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  id!: number;
  book: Book | undefined;
  private routeSub!: Subscription;

  private books: Book[] = [
    { id: 1, title: 'Кобзар', author: 'Тарас Шевченко ', pages: 400 },
    { id: 2, title: '1984', author: 'Джордж Орвел', pages: 320 },
    { id: 3, title: 'Метаморфоза', author: 'Франз Кафка', pages: 300 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.book = this.books.find(item => item.id === this.id);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}