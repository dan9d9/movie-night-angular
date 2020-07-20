import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MovieItem } from './movie-item.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  @Output() movieBtnClicked: EventEmitter<{
    idx: number;
    action: string;
  }> = new EventEmitter();

  @Input() movieItem: MovieItem;
  @Input() movieIdx: number;

  handleBtnClick(action: string) {
    this.movieBtnClicked.emit({ idx: this.movieIdx, action });
  }

  constructor() {}

  ngOnInit(): void {}
}
