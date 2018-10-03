import { Component, OnInit } from '@angular/core';
import { HttpdatafetcherService } from '../httpdatafetcher.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-httpdatacomponet',
  templateUrl: './httpdatacomponet.component.html',
  styleUrls: ['./httpdatacomponet.component.css']
})
export class HttpdatacomponetComponent implements OnInit {
comments:Comment[]
profiles:Profile
  constructor(private httpdatafetcherservice:HttpdatafetcherService) { }

  ngOnInit() {
// un comment below code when you want to test get request
//this.httpdatafetcherservice.getComments().subscribe(param=>this.comments=param)
console.log('gonna spawn post request')
this.httpdatafetcherservice.getPostData().subscribe(param=> this.profiles = param)

  }

}
