import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/Service/ContratService/contrat.service';
import {Contrat} from 'src/app/Model/Contrat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  contrat :Contrat[];

  constructor(private contratService:ContratService, private router : Router) { }

  ngOnInit(): void {
    this.getContract();
  }

  getContract(){
    this.contratService.getAllContrat().subscribe((res: Contrat[])=>{
      this.contrat = res ;
      console.log(res);
    },(err:Error)=>{
      console.log(err.message,err.name);
    });
  }
  Update(id){
    this.router.navigateByUrl(`ModifierContrat/${id}`);
  }
  delete(id){
    this.contratService.deleteById(id).subscribe(res=>{
      this.refresh();
    });
  }

  refresh(): void {
    window.location.reload();
  }  

}
