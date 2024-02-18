import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Workout } from '../../data/interfaces/workout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private _baseUrl = "http://localhost:3000/";
  private _httpClient;

  constructor() { 
    this._httpClient = inject(HttpClient);
  }

  retrieveWorkouts(): Observable<Workout[]> { 
    return this._httpClient.get<Workout[]>(this._baseUrl + "workouts");
  }
}
