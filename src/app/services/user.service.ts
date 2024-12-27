import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
   return this.httpClient.get(this.url);
  } 
  
  postUser(data: any) {
    return this.httpClient.post(this.url, data);
  }
}
