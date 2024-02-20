import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  API_URL = environment.GITHUB_CLONE_API_URL + '/auth';
  isLoggedIn = false;


  login(userData: any) {
    return this.http.post(`${this.API_URL}/signin`, userData, {headers: environment.headers} )
    .pipe(
      catchError((error: any) => {
        console.error('Login failed:', error);
        throw error;
      })
    );;
  }

  SignUp(userData: any) {
    return this.http.post(`${this.API_URL}/signup`, userData, {headers: environment.headers} )
    .pipe(
      catchError((error: any) => {
        console.error('SignUp failed:', error);
        throw error;
      })
    );;
  }

  currentUser() {
    const cu = this.http.get(`${this.API_URL}/current-user`, {headers: environment.headers});
    return cu;
  }

  verifyToken(token: any): Observable<any> {
    return this.http.post(`${this.API_URL}/token/verify`, token, {headers: environment.headers}
    );
  }

  resendToken(token: any): Observable<any> {
    return this.http.post(`${this.API_URL}/token/resend`, token, {headers: environment.headers}
    );
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.isLoggedIn = false;
  }
}
