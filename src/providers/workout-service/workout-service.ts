import { Injectable } from '@angular/core';
import { Http, Headers, ResponseOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from "rxjs/operator/map";

/*
  Generated class for the WorkoutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkoutServiceProvider {
  http: any;
  apiKey: String;
  workoutUrl:String;

  constructor(http: Http) {
    this.http=http;
    this.apiKey='HPEQEopUR_GK8t1RueWE4jeMgcnjaZ9W';
    this.workoutUrl='https://api.mlab.com/api/1/databases/myworkouts_app/collections/workouts';
  }
  getWorkout(){
    return this.http.get(this.workoutUrl+'?apiKey='+this.apiKey).map(res => {
      return res.json();
    });
  }
  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers: headers}).map(
      res => {
        res.json()
      });
  }
  deleteWorkout(id){
    //var headers= new Headers();
    //headers.append('Content-Type', 'appliaction/json');
    return this.http.delete(this.workoutUrl+'/'+id.$oid+'?apiKey='+this.apiKey).map(res => {
      res.json()
    });
  }

}
