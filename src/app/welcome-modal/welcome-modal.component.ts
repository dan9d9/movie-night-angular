import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css'],
})
export class WelcomeModalComponent implements OnInit {
  @Output() user1: string;
  @Output() user1Array: [] = [];
  @Output() user2: string;
  @Output() user2Array: [] = [];
  @Output() sendUserData: EventEmitter<{
    user1: string;
    user1Array: [];
    user2: string;
    user2Array: [];
  }> = new EventEmitter();

  handleSubmit(event) {
    event.preventDefault();
    if (!this.user1.trim() || !this.user2.trim()) return;

    this.getMovieLists(this.user1.trim(), this.user2.trim());
    this.sendUserData.emit({
      user1: this.user1.trim(),
      user1Array: this.user1Array,
      user2: this.user2.trim(),
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
