import { Component } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jrnl';

  ngOnInit(): void {
    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
    getAnalytics(app);
  }
}

