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
  allRepositoryWithOwner: GRepository[] = [];
  owner!: any;
  showContent: boolean = false;
  isConnected: boolean = false;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private repositoryService: ReposirotyService
  ) {}

  ngOnInit(): void {
    this.getCurrentUserRepository();

    setTimeout(() => {
      this.showContent = true;
    },600);
  }

  getCurrentUserRepository() {
    this.activatedRoute.paramMap.subscribe((p) => {
      this.userName = p.get('username');
    });
    // Actually don't works
    // this.userService.currentUser().subscribe((res) => {
    //   this.currenUser = res;
    // });

    // List of repository by username
    this.repositoryService
      .getRepositoryListByUsername(this.userName)
      .subscribe((res: any) => {
        this.allRepositoryWithOwner = res;

        if (this.allRepositoryWithOwner.length > 0) {
          const getOWner =
            this.allRepositoryWithOwner[this.allRepositoryWithOwner.length - 1];
          this.owner = getOWner;
        }

        this.allRepositoryWithOwner.forEach((repo) => {
          if (this.userName === this.owner.user.username && this.userName === localStorage.getItem('c_uN')) {
            // this.repositoriesWithOwner.push(repo);
            this.repositoriesWithOwner = this.allRepositoryWithOwner;
            this.isConnected = true;
          } else {
            this.repositoriesWithOwner = this.allRepositoryWithOwner.filter(r => r.visibility === true);
            this.isConnected = false;
          }
        });
      });
  }
}
