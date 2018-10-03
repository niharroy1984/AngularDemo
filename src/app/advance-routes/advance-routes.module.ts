import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ServcompComponent } from '../servcomp/servcomp.component';
import { ContctusComponent } from '../contctus/contctus.component';

import { RouterModule, Routes } from '@angular/router';
import { AdvanceroutecompComponent } from '../advanceroutecomp/advanceroutecomp.component';

const routepaths= [

  {path:'advance/:id',component:AdvanceroutecompComponent},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routepaths)
    
  ],
  exports:[RouterModule],
  declarations: []
})
export class AdvanceRoutesModule {


 }
