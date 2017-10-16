import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WorkoutServiceProvider} from '../../providers/workout-service/workout-service';
import {WorkoutsPage} from "../workouts/workouts";

/**
 * Generated class for the AddWorkoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
})
export class AddWorkoutPage {
  public title: String;
  public note: String;
  public type: String;
  public result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutServiceProvider) {

  }

  onSubmit(){
    var workout={
      title: this.title,
      note: this.note,
      type: this.type
    };
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data;
    });
    this.navCtrl.push(WorkoutsPage);
  }


}
