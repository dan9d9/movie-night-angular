import { Component, OnInit, Input } from '@angular/core';

import { MovieItem } from './user-container/movie-list/movie-item/movie-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user1: string = 'Somebody';
  user1Array: MovieItem[] = [];
  user2: string = 'Anonymous';
  user2Array: MovieItem[] = [];

  showModal = true;

  getUserData(userData) {
    this.user1 = userData.user1;
    this.user1Array = userData.user1Array;
    this.user2 = userData.user2;
    this.user2Array = userData.user2Array;

    this.showModal = false;
  }

  ngOnInit(): void {}
}
