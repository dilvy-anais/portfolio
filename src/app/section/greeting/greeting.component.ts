import { Component, OnInit } from '@angular/core';
import {LoadService} from "../../services/load.service";

interface Data {
  greeting:{
    title:string;
    description:string;
    button:string;
  };
}
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  data: Data | undefined
  constructor(private service: LoadService) {
    this.data = this.service.loadData()
  }

  ngOnInit(): void {
  }

}
