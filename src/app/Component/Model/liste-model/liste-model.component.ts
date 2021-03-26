import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/Service/model.service';
import {Model} from 'src/app/Model/Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-model',
  templateUrl: './liste-model.component.html',
  styleUrls: ['./liste-model.component.css']
})
export class ListeModelComponent implements OnInit {

  model :Model [];
  constructor(private modelService : ModelService, private router : Router) { }

  ngOnInit(): void {
    this.getModel();
  }

  getModel(){
    this.modelService.getModel().subscribe((res : Model[])=>{
      this.model = res
      console.log(res);
      console.log(this.model);
      
    });
  }

  delete(id){
    this.modelService.deleteById(id).subscribe((res)=>{
      this.refresh();
    });
  }
  refresh(): void {
    window.location.reload();
}  
Update(id){
  this.router.navigateByUrl(`ModifierModel/${id}`);
} 



}
