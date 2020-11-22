import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient:HttpClient) { }

  logout(): Promise<void> {
    return this.httpClient.get('/rest/logout')
               .toPromise()
               .catch(this.handleError);
  }


  login(username, password): Promise<String> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('/rest/login',{headers})
               .toPromise()
               .then(response => response as String)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
