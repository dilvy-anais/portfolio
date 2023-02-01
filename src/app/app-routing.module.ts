import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectComponent} from "./section/project/project.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"project", component:DetailsComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
