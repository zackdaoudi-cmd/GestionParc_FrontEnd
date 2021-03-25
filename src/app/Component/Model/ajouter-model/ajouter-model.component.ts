import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/Model/Model';
import { Inject } from '@angular/core';

import { ModelService } from 'src/app/Service/model.service';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-model',
  templateUrl: './ajouter-model.component.html',
  styleUrls: ['./ajouter-model.component.css']
})
export class AjouterModelComponent implements OnInit {

  imgURL: any;
  public selectedFile;
  idMarque:Number;
  marque:any;

  model : Model  = new Model();

  constructor(@Inject(ModelService)private modelService : ModelService , private http : HttpClient, private router : Router){}

  ngOnInit(): void {


    this.fetchDropDownList();
  }

     fetchDropDownList(){
       this.modelService.getIdMarkAndMarkName().subscribe(res=>{
           this.marque = res;

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

 
  public markName:String ;
  
  
  addNewModel(){

       if(this.selectedFile == null ){
         this.modelService.addNewModel(this.model).subscribe(res=>{
          this.router.navigateByUrl('listDesModels');
        });
          console.log(this.model);
      }else{
        const uploadData = new FormData();
        uploadData.append('imageFile',this.selectedFile);
        console.log(this.selectedFile);
        this.modelService.addPicture(uploadData).subscribe(res=>{
          if(res.status === 200 ){
            this.modelService.addNewModel(this.model ).subscribe(res=>{
              this.router.navigateByUrl('listDesModels');
            });
          }
        });
      }

    
  }

}
