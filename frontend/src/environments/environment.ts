import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
  GITHUB_CLONE_API_URL: 'http://localhost:8081/api/v1',
};
