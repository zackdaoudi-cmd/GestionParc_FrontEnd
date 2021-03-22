import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationComponent } from './Login/authentification/authentification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthInterceptor} from 'src/app/Interceptor/auth.interceptor';

import { AcceuilComponent } from './Component/acceuil/acceuil.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor , 
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
