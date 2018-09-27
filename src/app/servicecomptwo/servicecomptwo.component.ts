import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../staticdata.service';

@Component({
  selector: 'app-servicecomptwo',
  templateUrl: './servicecomptwo.component.html',
  styleUrls: ['./servicecomptwo.component.css']
})
export class ServicecomptwoComponent implements OnInit {
  dataforcomp2
  constructor(private sataticdataObject:StaticdataService) { }

  ngOnInit() {
    this.dataforcomp2=this.sataticdataObject.giveStaticData();

  }

}
