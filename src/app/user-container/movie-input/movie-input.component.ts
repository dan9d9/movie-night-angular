import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.css'],
})
export class MovieInputComponent implements OnInit {
  @Output() addMovie: EventEmitter<string> = new EventEmitter();

  title: string = '';
  // user: string;

  handleAddMovie() {
    if (!this.title.trim()) return;

    this.addMovie.emit(this.title);
    this.title = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
