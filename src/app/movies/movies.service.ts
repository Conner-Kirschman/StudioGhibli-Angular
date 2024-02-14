import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080';

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/movies/all`);
  }
}
