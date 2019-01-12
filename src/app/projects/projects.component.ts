import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  localData: any = [];
  customerList: AngularFireList<any>;

  constructor() {
    this.loadData();
  }

  ngOnInit() {
  }

  printPlease(item) {
    console.log(item.image);
  }

  loadData() {
    this.localData = [
      {
        title: 'User Information',
        description: 'Built using Angular 6, Firebase Realtime Database. Just a sample form performing CRUD operations with the extremly fast database.',
        image: '../../assets/firebaseCrud.png',
        link: 'https://buildingcrud.firebaseapp.com/',
        github: 'https://github.com/ndrishinski/angular-firebase-realtime-database-'
      },
      {
        title: 'Portfolio Page',
        description: 'This was my first portfolio website I built using Ruby on Rails and JavaScript.',
        image: '../../assets/oldPortfolio.png',
        link: 'https://nd-devcamp-portfolio.herokuapp.com',
        github: 'https://github.com/ndrishinski/devcamp-portfolio'
      },
      {
        title: 'EEG - Mobile App',
        description: 'This is a mobile application on both Apple App Store and Google Playstore that allows registered users to communicate and other essential functions. Built using Ionic 3. ',
        image: '../../assets/eeg-mobile.png',
      },
      {
        title: 'Mad Libs Generator',
        description: 'This was a fun project that I built using React. Fully functional but a quick and fun app to build. Simply input adjective/noun/verb and submit.',
        image: '../../assets/madlibs.png',
        link: 'https://nd-madlibs.herokuapp.com/',
        github: 'https://github.com/ndrishinski/madlibs'
      },
      {
        title: 'Birthday Countdown',
        description: 'Another fun project that I built using the React library. Creates a countdown after you enter your birthday. Also includes google calendar API.',
        image: '../../assets/countdownApp.png',
        github: 'https://github.com/ndrishinski/birthdaycountdown'
      },
      {
        title: 'Freelance Proposal',
        description: 'Angular 4 application that creates contract proposals for freelance developers. Utilizing two-way binding provided by Angular to populate proposals in real-time.',
        image: '../../assets/freelanceProposal.png',
        github: 'https://github.com/ndrishinski/angularfreelanceproject'
      },
      {
        title: 'Rate My Driving',
        description: 'Built on the MEAN (MongoDB, Express, Angular 6, Node) stack, this was an idea I had to enter a given cars license plate, and leave a review of there driving. Still under construction!',
        image: '../../assets/unavailable.png',
        github: 'https://github.com/fenwaymedia/ratemydriving'
      },
      {
        title: 'FaceBook Clone',
        description: 'An application I generated to practice bootstrap HTML/CSS.',
        image: '../../assets/facebookClone.png',
        link: 'https://ndrishinski.github.io/',
        github: 'https://github.com/ndrishinski/ndrishinski.github.io'
      },
      {
        title: 'Tesla Clone',
        description: 'Another practice application for markup and styling.',
        image: '../../assets/teslaClone.png',
      },
      {
        title: 'RobinHood Clone',
        description: 'Another practice application for markup and styling.',
        image: '../../assets/robinHood.png',
      },
    ]
  }


}
