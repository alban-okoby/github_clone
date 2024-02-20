import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  API_URL = environment.GITHUB_CLONE_API_URL + '/user';
  isLoggedIn = false;

  currentUser() {
    return this.http.get(`${this.API_URL}/me`, {headers: environment.headers} )
    .pipe(
      catchError((error: any) => {
        console.error('user not found:', error);
        throw error;
      })
    );;
  }
}
