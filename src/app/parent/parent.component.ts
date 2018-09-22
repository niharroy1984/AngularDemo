import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  checkMyFlag=true
  parentName='ToM'
  cities=['Bombay','Delhi','Chennai','Hydarabad']
  myJosnObj={name:'Tom',age:23}
  myAccountBalance=5
public parentContainer="";
  constructor() { }

  ngOnInit() {
  }

}
