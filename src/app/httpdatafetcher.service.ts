import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile';

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

   getPostData():Observable<Profile>{
 let profile ={
  name:'test',salary:'123',age:'test'
}
    let myPostURL='http://dummy.restapiexample.com/api/v1/create'
    console.log('gonna post data to the server')
    return this.httpClientObj.post<Profile>(myPostURL,profile)
   }


}
