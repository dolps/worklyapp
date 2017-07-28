import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import {WorkweekPage } from '../workweek/workweek'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab1Root = WorkweekPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
