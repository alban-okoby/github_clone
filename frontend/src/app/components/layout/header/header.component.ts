import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  alreadyLogin: any = localStorage.getItem('isLoggedIn');
  currentUser!: any;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (this.router.url !== '' && this.alreadyLogin == 'true') {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

  getCurrentUser() {
    this.userService.currentUser().subscribe((res) => this.currentUser = res);
    console.log(this.currentUser);
  }

  logOut() {
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 900);
  }
}
