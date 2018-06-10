import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { movies } from '../../../shared/movie.mock-data';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  coverUrl = '../../../../assets/images/movie-covers/';
  selectedMovie = movies;
  movie: any;
  name;
  trailer;

  constructor(
    private activatedRoute: ActivatedRoute
    ) {
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movie = this.selectedMovie.filter((movie) => {
        return movie.key === params.movieName;
      });
    });
    this.name = this.movie[0].name;
  }


}
