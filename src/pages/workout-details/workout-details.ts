import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WorkoutServiceProvider} from '../../providers/workout-service/workout-service';
import {WorkoutsPage} from "../workouts/workouts";

/**
 * Generated class for the WorkoutDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
})
export class WorkoutDetailsPage {
  public workout: any;
  public result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutServiceProvider) {
    this.workout=this.navParams.get('workout');
  }
  deleteWorkout(id){
    this.workoutService.deleteWorkout(id).subscribe(res => {
      this.result = res;
    });
    this.navCtrl.push(WorkoutsPage);
  }

}
