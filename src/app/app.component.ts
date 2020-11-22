import { Component } from '@angular/core';
import { HeroService } from 'src/services/hero.service';
import { AuthenticateService } from 'src/services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:String = 'Not Logged';
  username = 'user';
  password = 'password';
  logged = false;

  constructor (private heroService : HeroService, private authenticateService : AuthenticateService) {
  }

  ngOnInit() {
    
  }

  login() {
    this.authenticateService.login(this.username, this.password).then();
    this.name = 'Logged';
  }

  logout() {
    this.authenticateService.logout().then();
    this.name = 'Not Logged';
  }

  getHeroes() {
    this.heroService.getHeroes().then(response => this.name = response as String);
  }

  getSubHeroes() {
    this.heroService.getSubHeroes().then(response => this.name = response as String);
  }
}