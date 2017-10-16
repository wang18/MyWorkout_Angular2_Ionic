import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WorkoutServiceProvider} from '../../providers/workout-service/workout-service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

/**
 * Generated class for the WorkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers:[WorkoutServiceProvider]
})
export class WorkoutsPage {
  workouts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutServiceProvider) {
  }

  ngOnInit(){
      this.workoutService.getWorkout().subscribe( workouts => {
        this.workouts = workouts;
      });
    }
  workoutSelected(e, workout){
      this.navCtrl.push(WorkoutDetailsPage,{
        workout: workout
      });
  }
  ionViewWillEnter(){
    this.workoutService.getWorkout().subscribe( workouts => {
      this.workouts = workouts;
    });
  }
/*  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }*/

}
