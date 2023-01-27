import { Component, OnInit } from '@angular/core';
import {LoadService} from "../../services/load.service";

interface Team{
  coworker:number;
  function:string;
  duration: string;
}
interface Style {
  area: string;
}
interface Data {
  title:string;
  type:string;
  image:string;
  description:string;
  institution:string;
  technologies:Array<string>;
  team: Team;
  style:Style;

}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  data: Array<Data> | undefined;
  constructor(private service: LoadService) {
    this.data = this.service.loadData().project;

  }

  ngOnInit(): void {
  }

}
