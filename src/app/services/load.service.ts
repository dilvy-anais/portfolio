import { Injectable } from '@angular/core';

import content from "src/assets/content/fr-content.json"
@Injectable({
  providedIn: 'root'
})
export class LoadService {


  constructor() {
  }
  public loadData()
  {
    return content;
  }

}
