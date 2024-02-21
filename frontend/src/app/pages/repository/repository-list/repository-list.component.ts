import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';
import { GRepository } from 'src/app/core/model/GRepository';
import { ReposirotyService } from 'src/app/core/services/reposiroty.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent implements OnInit {
  currenUser!: any;
  userName!: any;
  repositoriesWithOwner: GRepository[] = [];
  owner!: any;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private repositoryService: ReposirotyService
  ) {}

  ngOnInit(): void {
    this.getCurrentUserRepository();
  }

  getCurrentUserRepository() {
    this.activatedRoute.paramMap.subscribe((p) => {
      this.userName = p.get('username');
      console.log(this.userName);
    });
    this.userService.currentUser().subscribe((res) => {
      this.currenUser = res;
      console.log(this.currenUser);
    });

    // List of repository by username
    this.repositoryService.getRepositoryListByUsername(this.userName).subscribe((res: any) => {
      this.repositoriesWithOwner = res;
      if (this.repositoriesWithOwner.length > 0) {
        const getOWner = this.repositoriesWithOwner[this.repositoriesWithOwner.length - 1];
        this.owner = getOWner;
      }
    })
  }
}
