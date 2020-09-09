import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
dolist:string[]=[];
tomlist:string[]=[];
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
  
  todorem(l){
    console.log("todo list remove fn called.....")
    //console.log(l)
    this.dolist.splice(l,1)

    console.log(this.dolist)
  
    
  }
  tomadd(m,k){
  console.log("tomorrow list add fn called")
  this.tomlist.push(m)
  console.log(this.tomlist)
  this.dolist.splice(k,1)
  }
  tomrem(v){
    console.log("tomorrow list remove fn called")
    this.tomlist.splice(v,1)
    console.log(this.tomlist)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
