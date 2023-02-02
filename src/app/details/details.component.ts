import { Component, OnInit } from '@angular/core';
import {LoadService} from "../services/load.service";
import {ActivatedRoute} from "@angular/router";

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
  problem:string;
  solution:string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public data : Array<Data> | undefined;
  public project: Data | undefined;
  public id:any;
  constructor(private service: LoadService,private router: ActivatedRoute) {
    this.router.queryParams.subscribe((param)=>{
      if(!isNaN(Number(param['id'])))
      {
        this.id=Number(param["id"]);
        this.data = service.loadData().project;
        this.project = this.data.find(item=>item.id==this.id);
        console.log(this.project)
      }
    })
  }
  ngOnInit(): void {

  }

}
