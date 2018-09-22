import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {

  constructor(ele:ElementRef) { 
      console.log('hey i am from your custom directives')
      ele.nativeElement.innerText='Your Name is'
  }

}
