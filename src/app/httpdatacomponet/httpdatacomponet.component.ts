import { Component, OnInit } from '@angular/core';
import { HttpdatafetcherService } from '../httpdatafetcher.service';

@Component({
  selector: 'app-httpdatacomponet',
  templateUrl: './httpdatacomponet.component.html',
  styleUrls: ['./httpdatacomponet.component.css']
})
export class HttpdatacomponetComponent implements OnInit {
comments:Comment[]
  constructor(private httpdatafetcherservice:HttpdatafetcherService) { }

  ngOnInit() {
this.httpdatafetcherservice.getComments().subscribe(param=>this.comments=param)

  }

}
