import { Component, Input, OnInit } from '@angular/core';
import { Workout } from '../../data/interfaces/workout';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'workout',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.sass',
})
export class WorkoutComponent implements OnInit {
  @Input() workout!: Workout;

  ngOnInit() {
    this.workout.date = new Date(this.workout.date);
    console.log(this.workout.date)
  }

  onClick() {
    this.workout.completed = !this.workout.completed;
  }
}
