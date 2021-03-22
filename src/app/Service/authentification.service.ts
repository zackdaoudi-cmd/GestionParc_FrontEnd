import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, environment } from 'src/environments/environment';






@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;

 
  constructor(private http : HttpClient) { }

  login(username , password):Observable<any> {

     let data = { email : username , password : password};      
    return this.http.post(`${baseUrl}login` , data ,{responseType: 'text'});
}

//signout 
signOut(): void {
  window.sessionStorage.clear();
}

























  // authenticationService(username: String, password: String) {
  //   return this.http.post(`http://localhost:8080/login`,
  //     { headers: { 
  //       authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
  //       this.username = username;
  //       this.password = password;
  //       this.registerSuccessfulLogin(username, password);
  //     }));
  // }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }

}
