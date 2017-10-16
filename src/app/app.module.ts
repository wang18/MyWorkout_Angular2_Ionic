import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import  {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AboutPage } from '../pages/about/about';
import { AddWorkoutPage } from '../pages/add-workout/add-workout';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutsPage} from '../pages/workouts/workouts';
import {WorkoutDetailsPage} from '../pages/workout-details/workout-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WorkoutServiceProvider } from '../providers/workout-service/workout-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    HomePage,
    TabsPage,
    WorkoutsPage,WorkoutDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule, FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddWorkoutPage,
    HomePage,
    TabsPage,
    WorkoutsPage,WorkoutDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkoutServiceProvider
  ]
})
export class AppModule {}
