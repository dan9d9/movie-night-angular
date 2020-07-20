import { Component, OnInit } from '@angular/core';

import { MovieItem } from './user-container/movie-list/movie-item/movie-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user1: string;
  user1Array: MovieItem[] = [];

  user2: string;
  user2Array: MovieItem[] = [];

  ngOnInit(): void {
    this.user1 = prompt('Enter first user name: ');
    this.user2 = prompt('Enter second user name: ');

    if (JSON.parse(localStorage.getItem(`${this.user1}List`))) {
      this.user1Array = JSON.parse(localStorage.getItem(`${this.user1}List`));
    }

    if (JSON.parse(localStorage.getItem(`${this.user2}List`))) {
      this.user2Array = JSON.parse(localStorage.getItem(`${this.user2}List`));
    }
  }
}
