import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from '../models/movie.model';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule
  ],
  providers: [MoviesService],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  constructor(private _moviesService: MoviesService) {}

  public movies: Movie[] = [];

  ngOnInit(): void {
    this._moviesService.getAllMovies()
      .subscribe( data => {
        this.movies = data;
      });
  }

}
