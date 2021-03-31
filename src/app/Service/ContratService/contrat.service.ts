import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Contrat} from 'src/app/Model/Contrat';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http :HttpClient) { }



  addNewContract(contrat:Contrat):Observable<any>{
    return this.http.post<Contrat>(`${baseUrl}Contrats/addNewContract`,contrat);
  }
  addPicture(formData :FormData):Observable<any>{
    return this.http.post(`${baseUrl}Contrats/addImg`,formData,{observe: 'response'});
  }

  getAllContrat():Observable<any>{
    return this.http.get<Contrat>(`${baseUrl}Contrats/ListDesContrats`);
  }
  deleteById(id:Number):Observable<any>{
    return this.http.delete<any>(`${baseUrl}Contrats/deleteById/${id}`);
  }

  getById(id : Number):Observable<any>{
    return this.http.get<any>(`${baseUrl}Contrats/getById/${id}`);
  }

  updateById(id:Number,contrat:Contrat):Observable<any>{
    return this.http.put(`${baseUrl}Contrats/updateById/${id}`,contrat);
  }
}