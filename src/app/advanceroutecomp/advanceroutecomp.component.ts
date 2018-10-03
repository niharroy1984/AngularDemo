import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advanceroutecomp',
  templateUrl: './advanceroutecomp.component.html',
  styleUrls: ['./advanceroutecomp.component.css']
})
export class AdvanceroutecompComponent implements OnInit {
dataFromCaller
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
     this.dataFromCaller= parseInt(this.activatedroute.snapshot.paramMap.get('id'))
    console.log('data from caller is'+this.dataFromCaller)
  }

}
