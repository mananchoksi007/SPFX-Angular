import { Component, Inject, OnInit } from '@angular/core';
import { ConfigurationService } from "./../shared/services/configuration.service";
import { ItemsService } from "./../shared/services";
import { ItemModel } from "./../shared/models";

@Component({
  selector: "angualrapp",
  template: require("./angularapp.template.html") as string,
  styleUrls : ["../src/webparts/basicangular/app/AngularApp/app.css"]
})
export class AngularAppComponent implements OnInit {name:string;
  items: any[];
  itemclass : string;
  constructor() {
    this.name = 'Angular2';
    this.items = [
      'lorem',
      'ipsum',
      'sit',
      'trump :D'
    ];
    this.itemclass = '';
  }
  selectItem(item){
    
    this.itemclass = item;
    console.log(this.itemclass);
  }  
  public ngOnInit() {
   // this.itemsService.getItems(this.configurationService.listName).then((items: ItemModel[]) => {
   //   this.items = items;
   // });
  }
}