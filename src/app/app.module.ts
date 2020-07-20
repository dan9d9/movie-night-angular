import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { HeaderComponent } from './user-container/header/header.component';
import { MovieListComponent } from './user-container/movie-list/movie-list.component';
import { MovieItemComponent } from './user-container/movie-list/movie-item/movie-item.component';
import { MovieInputComponent } from './user-container/header/movie-input/movie-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    HeaderComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
