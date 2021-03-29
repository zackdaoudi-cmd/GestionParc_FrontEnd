import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from 'src/app/Model/Marque';
import { Model } from '../Model/Model';

import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  iDmarque:Number;
  marque : Marque;
  modelName : String ;
  typeVehicule :String ;
  constructor(private http : HttpClient) { }

  /**Get idMarque and NameMark and fetch them in dropdownlist */
  public getIdMarkAndMarkName():Observable<Marque[]>{
    return this.http.get<any>(`${baseUrl}Marque/listeIdAndName`);
  }

  /**add pictures */
  public addPicture(formData : FormData):Observable<any>{
      return this.http.post<any>(`${baseUrl}Model/uploadImg`,formData,{observe: 'response'});
  }
  /**add new Mode */
  public addNewModel(model:Model):Observable<any>{
      return this.http.post<Model>(`${baseUrl}Model/addModel`,model);
  }
  /**get model */
  public getModel():Observable<any>{
      return this.http.get<Model>(`${baseUrl}Model/ListDesModel`);
  }

  /**Delete by id */
  public deleteById(id:Number){
    return this.http.delete(`${baseUrl}Model/delete/${id}`);
  }

  /**get < Model > by id  */
  getModelById(id:Number):Observable<any>{
    return this.http.get<Model>(`${baseUrl}Model/modelById/${id}`);
  }

  updateById(id:Number , model :Model):Observable<any>{
    return this.http.put<any>(`${baseUrl}Model/updateById/${id}`,model);
  }

  

}

