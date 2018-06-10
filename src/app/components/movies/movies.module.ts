import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movie-list/movie-list.component';
import { MatModule } from '../../shared/matModule';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatModule
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
