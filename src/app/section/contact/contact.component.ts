import { Component, OnInit } from '@angular/core';
import {LoadService} from "../../services/load.service";

interface Data{
 contact:{
   title:string,
   description:string,
   link:string
 }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public content: Data | undefined;
  constructor(private service:LoadService) {
    this.content = service.loadData()
  }

  ngOnInit(): void {
  }

}
