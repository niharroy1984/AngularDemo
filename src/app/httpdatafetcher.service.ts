import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpdatafetcherService {

  constructor(private httpClientObj:HttpClient) {
    console.log('HttpdatafetcherService constructor!!!')
  
    
   }

   getComments():Observable<Comment[]>{

    let myCommnetURL='https://jsonplaceholder.typicode.com/posts/1/comments'
    return this.httpClientObj.get<Comment[]>(myCommnetURL)
   }

}
