import { NgModule, Component } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { WorkweekPage } from './workweek';

@NgModule({
  declarations: [
    WorkweekPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkweekPage),
  ],
})

export class WorkweekPageModule {}
