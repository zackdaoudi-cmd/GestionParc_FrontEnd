import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Service/authentification.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(private authentificationService : AuthentificationService , private route : Router ) { }

  ngOnInit(): void {
  }

  signout(){
    localStorage.clear();
    this.route.navigateByUrl('/Authentification');
  }

}
