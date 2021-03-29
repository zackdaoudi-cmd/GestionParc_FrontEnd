import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marque } from 'src/app/Model/Marque';
import { Model } from 'src/app/Model/Model';
import { ModelService } from 'src/app/Service/model.service';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.css']
})
export class UpdateModelComponent implements OnInit {
  imgURL: any;
  public selectedFile;
  idParms : Number;
  model : Model  = new Model();
  marque :Marque[] ;
  mark : Marque = new Marque();
  imgdata :any;
  

  constructor(private modelService : ModelService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getModelById();
  }
   photoData:any ; 
  getModelById(){

    this. fetchDropDownList();
    this.idParms  = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
      this.modelService.getModelById(this.idParms).subscribe((res:Model)=>{
        console.log(res); 
        this.model = res;
        this.imgURL = 'data:image/png;base64,'+res.dataImg;
        this.imgdata = res.dataImg;
        this.mark = res.marque;
        console.log(this.model.marque);

      },(err:Error)=>{
        console.log(err.message);
      });
  }
  fetchDropDownList(){
      this.modelService.getIdMarkAndMarkName().subscribe((res:Marque[])=>{
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
  UpdateModel(){

    if(this.selectedFile == null ){
      this.idParms  = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
      this.modelService.updateById(this.idParms,this.model).subscribe(res=>{
        console.log("update without pic");
      });
      
    }else{
      const formData  = new FormData();
      formData.append('imageFile',this.selectedFile);
      this.modelService.addPicture(formData).subscribe((res)=>{
        if(res.status == 200 ){
          this.modelService.updateById(this.idParms,this.model).subscribe(res=>{
            console.log("update without pic");
          });
        }
      });

    }
  }

    
}
