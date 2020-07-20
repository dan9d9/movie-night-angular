import { Component, OnInit, Input } from '@angular/core';

import { MovieItem } from './movie-list/movie-item/movie-item.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  @Input() user: string;
  @Input() userMovies: MovieItem[];

  onMovieAdded(movieTitle) {
    this.userMovies.push(new MovieItem(movieTitle, this.user));
    localStorage.setItem(`${this.user}List`, JSON.stringify(this.userMovies));
  }

  handleMovieBtnClick(movieBtn) {
    if (movieBtn.action === 'delete') {
      this.userMovies.splice(movieBtn.idx, 1);
    } else if (movieBtn.action === 'toggleApprove') {
      this.userMovies[movieBtn.idx].approved = !this.userMovies[movieBtn.idx]
        .approved;
    }
    localStorage.setItem(`${this.user}List`, JSON.stringify(this.userMovies));
  }

  constructor() {}

  ngOnInit(): void {}
}
