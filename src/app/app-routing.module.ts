import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**import {AuthentificationComponent} from './Login/authentification/authentification.component'; */

const routes: Routes = [

/**  { path: 'hello', component: AuthentificationComponent },
 */  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }