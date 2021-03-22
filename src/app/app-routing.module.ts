import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AuthentificationComponent} from './Login/authentification/authentification.component'; 
import {AcceuilComponent} from './Component/acceuil/acceuil.component'
import { AuthGuard } from './guards/auth.guard';
// import { LoginGuard } from './guards/login.guard';
const routes: Routes = [

    { path: 'Authentification', component: AuthentificationComponent },
    {path:'Accueil',component:AcceuilComponent , canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }