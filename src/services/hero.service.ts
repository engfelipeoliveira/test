import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private url = '/rest/get'; 

  constructor(private http: Http) { }

  getHeroes(): Promise<String> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.statusText as String)
               .catch(this.handleError);
  }

  getSubHeroes(): Promise<String> {
    return this.http.get(this.url + "/rest/sub")
               .toPromise()
               .then(response => response.statusText as String)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
