import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MovieItem } from '../movie-list/movie-item/movie-item.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Output() movieBtnClicked: EventEmitter<{
    idx: number;
    action: string;
  }> = new EventEmitter();

  @Input() movies: MovieItem[];

  handleMovieBtnClick(movieBtn) {
    this.movieBtnClicked.emit({ idx: movieBtn.idx, action: movieBtn.action });
  }

  constructor() {}

  ngOnInit(): void {}
}
