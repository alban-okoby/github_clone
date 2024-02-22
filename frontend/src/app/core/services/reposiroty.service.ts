import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GRepository } from '../model/GRepository';

@Injectable({
  providedIn: 'root'
})
export class ReposirotyService {

  constructor(private http: HttpClient) {}

  API_URL = environment.GITHUB_CLONE_API_URL + '/repository';

  getRepositoryListByUsername(username: string) {
    return this.http.get(`${this.API_URL}/${username}`, {headers: environment.headers} )
  }
  createRepository(repository: GRepository) {
    return this.http.post(`${this.API_URL}/`,repository, {headers: environment.headers} )
  }
  createRepo(repository: GRepository, userId: any) {
    return this.http.post(`${this.API_URL}/`, {headers: environment.headers} )
  }
}
