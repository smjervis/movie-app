import { Injectable } from '@angular/core';
import { Movie } from "./models/movie";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  public movieList: Array<any>;

  constructor() {

    this.movieList = new Array();
  }

  addMovie(movie) {
    this.movieList.push(movie);
    let ml = this.movieList;
    sessionStorage.setItem(movie.title, JSON.stringify(ml));
  }

  getMovie() {
    let getM = Object.values(sessionStorage);
    let elem = [];
    getM.forEach(e => {
      elem = JSON.parse(e)
      elem.forEach(elemt => {
        this.movieList.push(elemt);
      })
    })
    return this.movieList;
  }

  removeMovie(i, title) {
    this.movieList.splice(i, 1);
    sessionStorage.removeItem(title);
  }
}
