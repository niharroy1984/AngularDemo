import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IIHT Angular App';
  customerName= 'Tom'
  isDisabledFlag=true;
  mytype="text"
  userName='Tom'
  charCount=0;
  disableTextBox=false;
   
  constructor(){

    console.log('app componnet constructor executed');
    }


    myInputFunction(){
      console.log('my function is getting called on input action on View- i am able to sense view changes')
    }

    buttonClickhandler(){
      console.log('Button Clicked - View to Source data is flowing')
    }
    cutCopyPaste(){

      console.log('cut copy paste - event handler')
    }

    countMyCharacters(){
console.log('caharcter entered ')
this.charCount= this.charCount+1;
if(this.charCount>=10){
  this.disableTextBox=true;

}
    }

}
