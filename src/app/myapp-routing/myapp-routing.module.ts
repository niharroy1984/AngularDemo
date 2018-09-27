import { NgModule, RootRenderer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ServcompComponent } from '../servcomp/servcomp.component';
import { ContctusComponent } from '../contctus/contctus.component';

const routepaths= [

  {path:'home',component:HomeComponent},
  {path:'services',component:ServcompComponent},
  {path:'contact',component:ContctusComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routepaths)
    
  ],
  exports:[RouterModule],
  declarations: []
})
export class MyappRoutingModule { }
