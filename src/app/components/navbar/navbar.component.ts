import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => console.log(res));
  }

  logout(): void {
    this.auth.signOut();
    this.router.navigate(['']);
  }
}
