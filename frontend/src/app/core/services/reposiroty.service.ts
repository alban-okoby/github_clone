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

  /**
   * get a repositories by username 
   * @param username 
   * @returns List of repositories or empty table
   */
  getRepositoryListByUsername(username: string) {
    return this.http.get(`${this.API_URL}/${username}`, {headers: environment.headers});
  }
  createRepository(repository: GRepository) {
    return this.http.post(`${this.API_URL}/`,repository, {headers: environment.headers});
  }

  // Not yet used 
  createRepo(repository: GRepository, userId: any) {
    return this.http.post(`${this.API_URL}/`, {headers: environment.headers});
  }

  /**
   * searchRepository
   * @param searchTerm repository name
   */
  searchRepository(searchTerm: string) {
    const result = this.http.get(`${this.API_URL}/search?q=${searchTerm}`, {headers: environment.headers});
    return result;
  }
}
