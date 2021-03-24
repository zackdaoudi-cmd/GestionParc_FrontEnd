import { Component, OnInit  } from '@angular/core';
import { FormBuilder  , FormControl, FormGroup} from '@angular/forms';

import { baseUrl } from 'src/environments/environment';

import { Router } from '@angular/router';
import { Marque } from 'src/app/Model/Marque';
import { MarqueService } from 'src/app/Service/marque.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-marque',
  templateUrl: './ajouter-marque.component.html',
  styleUrls: ['./ajouter-marque.component.css']
})
export class AjouterMarqueComponent implements OnInit {

  useFile ;
  public imagePath;
  imgURL: any;
  public message: string;
  public imgPath;

  public selectedFile;



  constructor(public marqueService : MarqueService,private router : Router, private fb:FormBuilder,
    private httpClient: HttpClient) { 
  
  }

  ngOnInit(): void {
  
    
  }

  userForm = this.fb.group({
    markName: new FormControl()
  });

 

markName:string;
public file;


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


addMark() {
	console.log(this.markName)

	const uploadData = new FormData();

	if (this.selectedFile == null) {
    console.log("selected files == bull ");

   // console.log(this.markName);
		this.marqueService.createNewMark(this.markName).subscribe(
			(res) => {
				this.router.navigateByUrl('List-des-marques');
			},(err:Error)=>{
        console.log(err);
      }
		);  
	} else {
    uploadData.append('imageFile', this.selectedFile);
    this.selectedFile.imageName = this.selectedFile.name;  
		// we upload our image and send it to back 
		this.httpClient.post(`${baseUrl}Marque/uploadImg`, uploadData, {
				observe: 'response'
			})
			.subscribe((response) => {
				// if upload success = 200 then we can create our  Marque object 
				if (response.status === 200) {
					this.marqueService.createNewMark(this.markName).subscribe(
						(response) => {
							this.router.navigateByUrl('List-des-marques');
						}
					);
				}
			});
	}
}
}
