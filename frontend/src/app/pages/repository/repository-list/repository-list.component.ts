import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent implements OnInit {
  currenUser!: any;
  userName!: any;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.activatedRoute.paramMap.subscribe((p: any) => {
      this.userName = p.get('username');
      console.log(this.userName);
    });
    this.userService.currentUser().subscribe((res) => {
      this.currenUser = res;
      console.log(this.currenUser);
    });
  }
}
