import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

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
import { HttpdatacomponetComponent } from './httpdatacomponet/httpdatacomponet.component'

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
    HttpdatacomponetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyappRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ServicecompComponent]
})
export class AppModule { }
