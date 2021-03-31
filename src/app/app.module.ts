import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationComponent } from './Login/authentification/authentification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthInterceptor} from 'src/app/Interceptor/auth.interceptor';

import { AcceuilComponent } from './Component/acceuil/acceuil.component';
import { NavbarTopComponent } from './Component/navbar-top/navbar-top.component';
import { ListeMarqueComponent } from './Component/Marque/liste-marque/liste-marque.component';
import { AjouterMarqueComponent } from './Component/Marque/ajouter-marque/ajouter-marque.component';
import { UpdateMarqueComponent } from './Component/Marque/update-marque/update-marque.component';
import { AjouterModelComponent } from './Component/Model/ajouter-model/ajouter-model.component';
import { ListeModelComponent } from './Component/Model/liste-model/liste-model.component';
import { UpdateModelComponent } from './Component/Model/update-model/update-model.component';
import { AjouterContratComponent } from './Component/Contrat/ajouter-contrat/ajouter-contrat.component';
import { UpdateContratComponent } from './Component/Contrat/update-contrat/update-contrat.component';
import { ListContratComponent } from './Component/Contrat/list-contrat/list-contrat.component';
import { DatePipe } from '@angular/common';


 
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AcceuilComponent,
    NavbarTopComponent,
    ListeMarqueComponent,
    AjouterMarqueComponent,
    UpdateMarqueComponent,
    AjouterModelComponent,
    ListeModelComponent,
    UpdateModelComponent,
    AjouterContratComponent,
    UpdateContratComponent,
    ListContratComponent,
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor , 
      multi:true
    },
    DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
