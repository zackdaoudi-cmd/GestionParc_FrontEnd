import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/Model/Contrat';
import { ContratService } from 'src/app/Service/ContratService/contrat.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {


  selectedFile:any;
  imgURL:any;
  contrat : Contrat =  new Contrat();
  idParms : Number ;
  startDateString:string ;
  endDateString : string;
  


  constructor(private contratService : ContratService,
     private router : Router , private activateRoute:ActivatedRoute,
     public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getContrat();
  }

  Update(){

    this.contrat.startDate = new Date(this.startDateString);
    this.contrat.endDate = new Date(this.endDateString);  
   if(this.selectedFile == null ){
      
      this.idParms  = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
      this.contratService.updateById(this.idParms,this.contrat).subscribe(res=>{
        console.log("update without pic");
      });

    }else{
      const formData  = new FormData();
      formData.append('imageFile',this.selectedFile);
      this.contratService.addPicture(formData).subscribe((res)=>{
        if(res.status == 200 ){
          this.contratService.updateById(this.idParms,this.contrat).subscribe(res=>{
            console.log("update without pic");
          });
        }
      });

    }
  }
  getContrat(){
    this.idParms  = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    this.contratService.getById(this.idParms).subscribe((res:Contrat)=>{
        this.contrat =  res ;
        this.startDateString = moment(this.contrat.startDate).format('YYYY-MM-DD');
        this.endDateString = moment(this.contrat.endDate).format('YYYY-MM-DD');
        this.imgURL = 'data:image/png;base64,'+res.agreementPicturesData;
    });
  }

  public onFileChanged(event) {
    // img size : en kbs
      var size = Math.round(event.target.files[0].size/1024);
      if(size >3000){
        alert("Image Size " +size);
      }else{
        console.log(size);
        this.selectedFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
          this.imgURL = reader.result;
        };
    }
  }



}
