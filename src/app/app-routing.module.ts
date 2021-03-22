import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AuthentificationComponent} from './Login/authentification/authentification.component'; 
import {AcceuilComponent} from './Component/acceuil/acceuil.component'
import {NavbarTopComponent} from './Component/navbar-top/navbar-top.component';
import { AuthGuard } from './guards/auth.guard';
import { AjouterMarqueComponent } from './Component/Marque/ajouter-marque/ajouter-marque.component';
import { ListeMarqueComponent } from './Component/Marque/liste-marque/liste-marque.component';
import { AppComponent } from './app.component';
import { UpdateMarqueComponent } from './Component/Marque/update-marque/update-marque.component';

const routes: Routes = [

    { path: 'Authentification', component: AuthentificationComponent },
    {path : 'test', component:AppComponent},
   




    {
      path: '', component : NavbarTopComponent , canActivate: [AuthGuard], 
      children:
       [
          { path: 'Accueil', component: AcceuilComponent },
          { path: 'List-des-marques', component: ListeMarqueComponent },
          { path: 'Modifier-marques/:id', component: UpdateMarqueComponent },
          { path: 'AjouterMarque', component: AjouterMarqueComponent },
          {path : 'nav', component:NavbarTopComponent},

       ]
    }
        
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }