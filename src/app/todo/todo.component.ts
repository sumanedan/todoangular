import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
dolist:string[]=[];
todoval:string;
  todo() 
  {
    console.log("todolist add fn called")
    if(this.todoval!=""){
    this.dolist.push(this.todoval);
    console.log(this.dolist);
    }else{
      alert("Empty....Enter Value")
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
