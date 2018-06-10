import { Component, OnInit } from '@angular/core';
import { movies } from '../../../shared/movie.mock-data';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ovies-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MoviesComponent implements OnInit {
  coverUrl = '../../../../assets/images/movie-covers/';
  moviesList: any;
  temp = movies;
  selectedMovie: any;
  searchValue = '';
  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.fetchMovies();
  }
  showMovieDetails(selectedMovie: any): void {
    this.router.navigate(['/movie', selectedMovie.key]);
  }
  fetchMovies() {
    this.moviesList = movies;

  }
  clear() {
    this.searchValue = '';
    this.fetchMovies();
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    setTimeout(() => {
      const temp = this.temp.filter(function (d) {
        let filterIndex = false;
        if (d.name && d.name.toLowerCase().indexOf(val) !== -1 || !val) {
          filterIndex = d.name.toLowerCase().indexOf(val) !== -1 || !val;
        }
        if (!filterIndex && d.rate) {
          filterIndex = d.rate.toLowerCase().indexOf(val) !== -1 || !val;
        }
        return filterIndex;
      });

      this.moviesList = temp;
    }, 1000);
  }


}
