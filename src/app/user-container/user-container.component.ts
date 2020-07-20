import { Component, OnInit } from '@angular/core';

import { MovieItem } from './movie-list/movie-item/movie-item.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  movies: MovieItem[] = [];

  onMovieAdded(movieTitle) {
    this.movies.push(new MovieItem(movieTitle, 'user'));
  }

  handleMovieBtnClick(movieBtn) {
    if (movieBtn.action === 'delete') {
      this.movies.splice(movieBtn.idx, 1);
    } else if (movieBtn.action === 'toggleApprove') {
      this.movies[movieBtn.idx].approved = !this.movies[movieBtn.idx].approved;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
