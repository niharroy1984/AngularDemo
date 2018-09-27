import { Component, OnInit } from '@angular/core';
import { StaticdataService } from '../staticdata.service';

@Component({
  selector: 'app-servicecomp',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css']
})
export class ServicecompComponent implements OnInit {
  staticcontent:string
  studentObj:Student
  dataOnuserHit:string
//injection of service
  constructor(private sataticdataObject:StaticdataService) { }

  ngOnInit() {
this.staticcontent=this.sataticdataObject.giveStaticData();
this.studentObj=this.sataticdataObject.getSampleStudent()


console.log(this.staticcontent)
    
  }

  hitService(){
    this.dataOnuserHit=this.sataticdataObject.getDataOnUserHit();

  }

}
