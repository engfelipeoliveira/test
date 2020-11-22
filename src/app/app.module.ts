import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeroService } from 'src/services/hero.service';
import { HttpModule } from '@angular/http';
import { AuthenticateService } from 'src/services/authenticate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [HeroService, AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
