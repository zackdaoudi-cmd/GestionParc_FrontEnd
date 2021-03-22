import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Service/authentification.service';



@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {


  username: string;
  password : string;
  errorMessage = 'Username ou bien mot de passe invalide';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router  : Router ,
      private AuthentificationService:AuthentificationService) { }

  ngOnInit(): void {
    
  }


  login(){
  
      this.AuthentificationService.login(this.username,this.password).subscribe(res => {
          localStorage.setItem('token', res);
          this.invalidLogin = false;
         this.loginSuccess = true;
         this.successMessage = 'Login Successful.';
           this.router.navigateByUrl('/Accueil');
        
      },()=>{
             this.invalidLogin = true;
             this.loginSuccess = false;
        });     

  }

}

