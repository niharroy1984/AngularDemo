import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { NewappComponent } from './newapp/newapp.component';
import { HomeComponent } from './home/home.component';
import { ServcompComponent } from './servcomp/servcomp.component';
import { ContctusComponent } from './contctus/contctus.component';
import { MyappRoutingModule } from './myapp-routing/myapp-routing.module';
import { ServicecompComponent } from './servicecomp/servicecomp.component';
import { ServicecomptwoComponent } from './servicecomptwo/servicecomptwo.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpdatacomponetComponent } from './httpdatacomponet/httpdatacomponet.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AdvanceroutecompComponent } from './advanceroutecomp/advanceroutecomp.component';
import { TestadnavcerouteComponent } from './testadnavceroute/testadnavceroute.component';
import { AdvanceRoutesModule } from './advance-routes/advance-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MyCustomDirectiveDirective,
    NewappComponent,
    HomeComponent,
    ServcompComponent,
    ContctusComponent,
    ServicecompComponent,
    ServicecomptwoComponent,
    HttpdatacomponetComponent,
    TemplatedrivenComponent,
    ReactiveformComponent,
    AdvanceroutecompComponent,
    TestadnavcerouteComponent
    
  ],
  imports: [
    BrowserModule,
    MyappRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdvanceRoutesModule
  ],
  providers: [],
  bootstrap: [ReactiveformComponent]
})
export class AppModule { }
