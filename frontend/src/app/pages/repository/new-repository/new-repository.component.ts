import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/auth/models/user.model';
import { GRepository } from 'src/app/core/model/GRepository';
import { ReposirotyService } from 'src/app/core/services/reposiroty.service';

@Component({
  selector: 'app-new-repository',
  templateUrl: './new-repository.component.html',
  styleUrls: ['./new-repository.component.scss'],
})
export class NewRepositoryComponent implements OnInit {
  connectedUser!: any | null;
  connectedUserId!: any;
  form!: FormGroup;
  isSaving: boolean = false;
  repository: GRepository = new GRepository();

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private repoService: ReposirotyService
  ) {
    this.connectedUserId = localStorage.getItem('c_uId');
  }
  ngOnInit(): void {
    let connectedUser = localStorage.getItem('c_uN');
    this.connectedUser = connectedUser;
    this.initForm();
  }

  initForm() {
    this.repository = new GRepository();
    this.form = this._fb.group({
      repositoryName: [this.repository.repositoryName, [Validators.required]],
      repositoryDescription: [this.repository.repositoryDescription],
      visibility: [this.repository.visibility, [Validators.required]],
      // user_id: [this.repository.user, [Validators.required]],
    });
  }

  get repositoryName() {
    return this.form.get('repositoryName') as FormControl;
  }
  get repositoryDescription() {
    return this.form.get('repositoryDescription') as FormControl;
  }
  get visibility() {
    return this.form.get('visibility') as FormControl;
  }

  submitEntity(): void {
    this.isSaving = true;
    this.setAttributes();
    setTimeout(() => {
      localStorage.getItem('c_uId');
      this.repoService
        .createRepository(this.repository)
        .subscribe((clt: any) => {
          localStorage.setItem(
            'lastCreatedRepo',
            JSON.stringify(this.repository.repositoryName)
          );
          this.isSaving = false;
          setTimeout(() => {
            this.router.navigate([
              '/' +
                this.connectedUser +
                '/repositories',
            ]);
          }, 1500);
        });
    }, 2300);
  }

  setAttributes() {
    this.repository.repositoryName = this.repositoryName.value;
    this.repository.repositoryDescription = this.repositoryDescription.value;
    this.repository.visibility = this.visibility.value;
    this.repository.user_id = this.connectedUserId;
  }

  visibilities = {private: true, public: false};
}
