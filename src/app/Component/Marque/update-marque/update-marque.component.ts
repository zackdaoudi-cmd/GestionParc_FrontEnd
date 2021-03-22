import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from 'src/app/Service/marque.service';
import { baseUrl } from 'src/environments/environment';



@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.css']
})
export class UpdateMarqueComponent implements OnInit {

  public file;
  public selectedFile;
  imgURL: any;
  markName:String ; 
  idParms:Number

  constructor(private activateRoute: ActivatedRoute,private marqueService : MarqueService,
    private http : HttpClient,
    private router : Router) { }

  ngOnInit(): void {
   this.getMarkById();


  }


  // methode to show image uploaded
  public onFileChanged(event) {
    // img size : en kbs
      var size = Math.round(event.target.files[0].size/1024);
      if(size >3000){
        alert("Image Size " +size);
      }else{
        console.log(size);
        this.selectedFile = event.target.files[0];
        console.log(this.markName)
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
          this.imgURL = reader.result;
        };
    }
  }

 

  result:String ; 
  public photoData;
  getMarkById(){
    
    this.idParms  = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    this.marqueService.getMarkById(this.idParms).subscribe(res=>{
            this.photoData = res.data;
            this.markName = res.markName;
            this.result = res.data;
            this.imgURL = 'data:image/jpeg;base64,'+res.data;
       
      
    },(err: Error)=>{
      console.log(err.message);
      this.router.navigateByUrl('List-des-marques');
    });

  }



  ModifierMark(){

    // get id from link !
    this.idParms  = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    const uploadData = new FormData();

    uploadData.append('imageFile',this.selectedFile);

         console.log(uploadData)
         // check if already selecte a file if sleectedFil ==  null then he will change just the 'Mark Name';
         if(this.selectedFile == null){
             
            this.marqueService.upldatById(this.markName,this.idParms).subscribe(
                (res) => {
    
                this.router.navigateByUrl('List-des-marques');
                }
            );
                // else it will change the pic and also the mark name :)))
         }else{

                        this.http.post(`${baseUrl}Marque/uploadImg`, uploadData, { observe: 'response' })
                        .subscribe((response) => {
                    
                    // if upload success = 200 then we can create our  Marque object 
                    if (response.status === 200  ) {
                    this.idParms  = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
                    this.marqueService.upldatById(this.markName,this.idParms).subscribe(
                            (res) => {
                
                            this.router.navigateByUrl('List-des-marques');
                            }
                        );
                        console.log('Image uploaded successfully');
                    } else {
                    console.log('Image not uploaded successfully');
                    }
                    }
                );
        }
  }











  


}
