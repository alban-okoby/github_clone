import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogged: boolean = false;
  alreadyLogin: any = localStorage.getItem('isLoggedIn');

  ngOnInit(): void {
    if (this.alreadyLogin === 'true') {
      this.isLogged = true;
    }
  }
}
