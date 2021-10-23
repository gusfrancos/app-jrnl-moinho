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

const firebaseConfig = {
  apiKey: "AIzaSyAN46KBKqig_4OaZNuBe42SNu_fy1O35Fo",
  authDomain: "rep-app-moinho.firebaseapp.com",
  databaseURL: "https://rep-app-moinho-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rep-app-moinho",
  storageBucket: "rep-app-moinho.appspot.com",
  messagingSenderId: "506340719362",
  appId: "1:506340719362:web:84aaaec3a66cd934d5e01b",
  measurementId: "G-RNZ009R08V"
};
