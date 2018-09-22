import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
//@Input('fromparenttochildkey') childComponentContainerToHoldParentsValue;
//@Input() public fromparenttochildkey

//@Output() public childEventToGetInParentComponent = new EventEmitter();
   constructor() {
    console.log('test')
   }

  ngOnInit() {
  }


  myClickHandler(){
    console.log('I am being pressed!!')
   // this.childEventToGetInParentComponent.emit('I am from child component')
  }
}
