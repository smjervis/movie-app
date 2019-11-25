import { Component, OnInit } from '@angular/core';
import { Movie } from "../models/movie";
import { MovieListService } from "../movie-list.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  providers: [MovieListService]
})
export class MovieFormComponent implements OnInit {

  public movie: Movie;

  constructor(

    private _movieListService: MovieListService, private router: Router
  ) {
    this.movie = new Movie("", "", "", "")
  }

  ngOnInit() {
  }

  addMovieData() {
    this._movieListService.addMovie(this.movie)
    this.router.navigate(['home']);
  }
}
