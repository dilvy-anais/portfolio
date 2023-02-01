import { Component, OnInit } from '@angular/core';
import {LoadService} from "../../services/load.service";
import {Router} from "@angular/router";


interface Team{
  coworker:number;
  function:string;
  duration: string;
}
interface Style {
  area: string;
}
interface Data {
  id:number;
  title:string;
  type:string;
  image:string;
  description:string;
  institution:string;
  technologies:Array<string>;
  team: Team;
  style:Style;
  problem: string;
  solution:string;

}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  data: Array<Data> | undefined;
  constructor(private service: LoadService,private router: Router) {
    this.data = this.service.loadData().project;

  }

  onClick(projectID:number |undefined){
     if(projectID!==undefined){
       this.router.navigate(["project"],{ queryParams: { id: projectID }});
     }
  }
  ngOnInit(): void {
  }

}
