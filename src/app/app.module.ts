import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './section/header/header.component';
import { GreetingComponent } from './section/greeting/greeting.component';
import { ProjectComponent } from './section/project/project.component';
import { ContactComponent } from './section/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    ProjectComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
