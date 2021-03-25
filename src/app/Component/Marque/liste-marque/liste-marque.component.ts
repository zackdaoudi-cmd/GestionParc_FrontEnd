import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/Model/Marque';
import { MarqueService } from 'src/app/Service/marque.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-marque',
  templateUrl: './liste-marque.component.html',
  styleUrls: ['./liste-marque.component.css']
})
export class ListeMarqueComponent implements OnInit {

  public marque : Marque[];

  constructor( private marqueService : MarqueService, private router : Router) { }

  ngOnInit(): void {
      this.getListMark();
    
  }
  ajouterRouter(){
    this.router.navigateByUrl("AjouterMarque");
  }
 
  //gett List Marque 
  public getListMark(){
    
    this.marqueService.getAllMarks().subscribe(
      (res : Marque[])=>{
        
        this.marque = res;
        
        console.log(res);
         
      },(error :HttpErrorResponse)=>{
        console.log(error.message);
      }
    );
  }

  update(idMarque){
    console.log(idMarque)
    this.router.navigateByUrl(`Modifier-marques/${idMarque}`);

  }
  //Refresh page
  refresh(): void {
    window.location.reload();
}    

  delete(idMarque){
    this.marqueService.deleteById(idMarque).subscribe(
      data => {
        console.log(data);
          this.refresh();
      }
    );
    console.log(idMarque)
  }
  

}
