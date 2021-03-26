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
import { AjouterModelComponent } from './Component/Model/ajouter-model/ajouter-model.component';
import { ListeModelComponent } from './Component/Model/liste-model/liste-model.component';
import { UpdateModelComponent } from './Component/Model/update-model/update-model.component';

const routes: Routes = [

    { path: 'Authentification', component: AuthentificationComponent },
    {path : 'test', component:AppComponent},
   




    {
      path: '', component : NavbarTopComponent , canActivate: [AuthGuard], 
      children:
       [
          { path: 'Accueil', component: AcceuilComponent },
          /**Start Marque */
          { path: 'List-des-marques', component: ListeMarqueComponent },
          { path: 'Modifier-marques/:id', component: UpdateMarqueComponent },
          { path: 'AjouterMarque', component: AjouterMarqueComponent },
                    /**End Marque */
          {path : 'nav', component:NavbarTopComponent},
                    /**Start Model */
          {path :'ajouterModel' , component:AjouterModelComponent},
          {path:'listDesModels' , component :ListeModelComponent},
          {path:'ModifierModel/:id',component:UpdateModelComponent}
                    /**End Model */



       ]
    }
        
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }