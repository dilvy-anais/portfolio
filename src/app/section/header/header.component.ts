import { Component, OnInit } from '@angular/core';
import {LoadService} from "../../services/load.service";
import {JSONFile} from "@angular/cli/src/utilities/json-file";

interface Data {
  header: Array<Array<string>>;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public content: Data | undefined;
  public ancre:Array<string>=["home","#project-section","#contact-section"];

  constructor(private service : LoadService){
    this.content = this.service.loadData();
  }
  ngOnInit(): void {


  }

}
