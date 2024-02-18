import { Component, inject } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { Workout } from '../../data/interfaces/workout';
import { WorkoutComponent } from '../workout/workout.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [WorkoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  workouts?: Workout[];
  private _workoutService: WorkoutService;

  constructor() {
    this._workoutService = inject(WorkoutService);

    this._workoutService.retrieveWorkouts().subscribe((workouts) => {
      this.workouts = workouts;
      console.log(this.workouts);
    });
  }
}
