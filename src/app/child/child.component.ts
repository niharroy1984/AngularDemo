import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  templateFlag=true
//@Input('fromparenttochildkey') public childComponentContainerToHoldParentsValue;
@Input() public fromparenttochildkey

@Output() public childEventToGetInParentComponent = new EventEmitter();
   constructor() {
    console.log('test')
   }

  ngOnInit() {
  }


  myClickHandler(){
    console.log('I am being pressed!!')
   this.childEventToGetInParentComponent.emit('Tommy-child to parent')
  }
}

