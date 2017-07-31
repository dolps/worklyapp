import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {WorkweekPage } from '../workweek/workweek'
import { LoginPage } from "../login/login";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab1Root = WorkweekPage;
  tab2Root = AboutPage;
  tab3Root = LoginPage;

  constructor() {

  }
  addWork(){
    console.log("adding work");
  }
}
