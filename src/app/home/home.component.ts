import { Component, OnInit } from '@angular/core';
import { Movie } from "../models/movie";
import { MovieListService } from "../movie-list.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieListService]
})
export class HomeComponent implements OnInit {

  public movieList: Array<Movie>;
  public listed: boolean;
  public movieDetails: Movie;
  public state = null;

  constructor(
    private _movieListService: MovieListService
  ) {
    this.movieList = new Array();
    this.movieDetails = new Movie("","","","");
    this.listed = false;
  }

  ngOnInit() {
    this.movieList = this._movieListService.getMovie();
  }

  removeMovieData(i, title){
    this._movieListService.removeMovie(i, title);
    window.location.reload()
  }

  showMovieDetails(movie){
    this.listed = true;
    this.movieDetails = movie
  }

  changeState(index){
    this.state = index;
  }
}
