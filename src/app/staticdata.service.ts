import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {

  constructor() {
console.log('Static data Service Constructor.')

   }

   giveStaticData():string{
   return 'Hello IIHT Trainees'
   }

   getSampleStudent():Student{
    let studentObj:Student={name:'Tom',address:'test street'}
    return studentObj
   }

   getDataOnUserHit():string{
     return 'Hey , You hit the button'
   }
}
