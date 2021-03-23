import { HttpClient } from '@angular/common/http';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Marque } from '../Model/Marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  public dataForm:  FormGroup; 
  markName:String;  
  img;
  constructor(private http:HttpClient) { }


  createNewMark(markName): Observable<any> {
    let data ={markName : markName}
    return this.http.post<Marque>(`${baseUrl}Marque/addMarque`,data );
  }

  
  getAllMarks():Observable<Marque[]>{
    return this.http.get<any>(`${baseUrl}Marque/listeMarque`);
  }

  deleteById(idMarque :Number ):Observable<any>{
    return this.http.delete(`${baseUrl}Marque/deleteById/${idMarque}`,{ responseType: 'text' });
  }

  getMarkById(idMarque : Number):Observable<any>{
    return this.http.get<any>(`${baseUrl}Marque/markById/${idMarque}`)
  }

  upldatById(markName,id):Observable<any>{
    let datas ={markName : markName};
      return this.http.put<Marque>(`${baseUrl}Marque/UpdateMarque/${id}`,datas);
  }


}
