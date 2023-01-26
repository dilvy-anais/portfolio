import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './section/header/header.component';
import { GreetingComponent } from './section/greeting/greeting.component';
import { ProjectComponent } from './section/project/project.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    ProjectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
