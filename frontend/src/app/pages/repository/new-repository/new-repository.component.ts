import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-new-repository',
  templateUrl: './new-repository.component.html',
  styleUrls: ['./new-repository.component.scss']
})
export class NewRepositoryComponent implements OnInit {

  connectedUser!: any | null;

  constructor(private router: Router) {}
  ngOnInit(): void {
    let connectedUser = localStorage.getItem('c_uM');
    this.connectedUser = connectedUser;
  }
}
