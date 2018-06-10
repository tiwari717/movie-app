import { MatModule } from '../../shared/matModule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatModule
  ],
  declarations: [MovieComponent]
})
export class MovieModule { }
