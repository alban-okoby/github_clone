import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  alreadyLogin: any = localStorage.getItem('isLoggedIn');

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (this.router.url !== '' && this.alreadyLogin == 'true') {
        this.isLogged = true;
      }
      else {
        this.isLogged = false;
      }
    });

  }

  logOut() {
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 900)
  }
}
