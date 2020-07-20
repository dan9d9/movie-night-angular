import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MovieItem } from '../user-container/movie-list/movie-item/movie-item.model';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css'],
})
export class WelcomeModalComponent implements OnInit {
  @Output() sendUserData: EventEmitter<{
    user1: string;
    user1Array: MovieItem[];
    user2: string;
    user2Array: MovieItem[];
  }> = new EventEmitter();

  user1: string;
  user1Array: MovieItem[] = [];
  user2: string;
  user2Array: MovieItem[] = [];

  handleSubmit(event) {
    event.preventDefault();

    this.user1 = this.user1.trim();
    this.user2 = this.user2.trim();
    if (!this.user1 || !this.user2) return;

    this.getMovieLists(this.user1, this.user2);
    this.sendUserData.emit({
      user1: this.user1,
      user1Array: this.user1Array,
      user2: this.user2,
      user2Array: this.user2Array,
    });
  }

  getMovieLists(user1, user2): void {
    if (JSON.parse(localStorage.getItem(`${user1}List`))) {
      this.user1Array = JSON.parse(localStorage.getItem(`${user1}List`));
    }

    if (JSON.parse(localStorage.getItem(`${user2}List`))) {
      this.user2Array = JSON.parse(localStorage.getItem(`${user2}List`));
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
