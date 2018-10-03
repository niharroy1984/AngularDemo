import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testadnavceroute',
  templateUrl: './testadnavceroute.component.html',
  styleUrls: ['./testadnavceroute.component.css']
})
export class TestadnavcerouteComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }
send(id){
  console.log('gonna add new component with the route and data we are pssing is:'+id)
  this.router.navigate(['/advance',1]);


}
}
