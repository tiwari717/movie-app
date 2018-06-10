import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavListComponent } from '../app/components/navbar/nav-list/nav-list.component';


const routes: Routes = [
  {
    path: '',
    component: NavListComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/components/home/home.module#HomeModule'
      },
      {
        path: 'movies',
        loadChildren: 'app/components/movies/movies.module#MoviesModule'
      },
      {
        path: 'movie/:movieName',
        loadChildren: 'app/components/movie/movie.module#MovieModule',
        pathMatch: 'full'
      },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
