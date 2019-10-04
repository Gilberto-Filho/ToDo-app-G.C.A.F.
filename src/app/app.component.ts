import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";

@Component({
  selector: "todo-app",
  templateUrl: "./app.component.html",
   styleUrls: [ './app.component.css' ]

  })
export class AppComponent  {
  model = new Model();
  getName(){
    return this.model.user;
  }
  getTodoItems(){
    return this.model.items.filter( function (item){ return !item.done});
  
  }
  addItem(newItem, priority, data){
    if(newItem !=""){
      this.model.items.push(new TodoItem(newItem, false, priority, data));
    }
    this.model.sortByDataItem();
  }
  getTodoItemsFeitos(){
    return this.model.items.filter(function (item){ return item.done});
   }

  }


