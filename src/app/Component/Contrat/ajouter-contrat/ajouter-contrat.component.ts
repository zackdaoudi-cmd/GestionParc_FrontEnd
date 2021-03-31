import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/Model/Contrat';
import { ContratService } from 'src/app/Service/ContratService/contrat.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-ajouter-contrat',
  templateUrl: './ajouter-contrat.component.html',
  styleUrls: ['./ajouter-contrat.component.css']
})
export class AjouterContratComponent implements OnInit {

  selectedFile:any;
  imgURL:any;
  contrat : Contrat =  new Contrat();
  constructor(private contratService : ContratService,
     private router : Router,
     public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  addNewContrat(){
    this.contrat.endDate=new Date(this.contrat.endDate);
    this.contrat.startDate=new Date(this.contrat.startDate);
    if(this.selectedFile == null ){
      console.log(this.contrat);
      this.contratService.addNewContract(this.contrat).subscribe((res)=>{
        console.log("Add Successfulyy");
      });
    }else{
      const uploadData = new FormData();
      uploadData.append('imageFile',this.selectedFile);
      console.log(this.selectedFile);
      this.contratService.addPicture(uploadData).subscribe(res=>{
        if(res.status === 200){
          this.contratService.addNewContract(this.contrat).subscribe(res=>{
              this.router.navigateByUrl('listDesContrats');
          });
        }
      })
    }

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
