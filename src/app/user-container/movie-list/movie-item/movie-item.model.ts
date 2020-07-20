export class MovieItem {
  user: string;
  title: string;
  approved: boolean = false;
  summary: string;
  posterPath: string;
  videoPaths: string[];

  constructor(title: string, user: string) {
    this.title = title;
    this.user = user;
  }
}
