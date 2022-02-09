import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos!: Todo[];
  inputTodo  =""

  constructor() { }

  ngOnInit(): void {

    this.todos  =[
      {
       content: "First Todo",
       completed: false
  
      },
      {
        content: "Second Todo",
        completed: true
   
       },
     ]    
  }
   toggleDone(id:any) {
   this.todos.map((status,i)=>{
     if(i==id)status.completed = !status.completed
     return status;
   })
  }

  deleteTodo(id:number){
this.todos=this.todos.filter((todo,index )=> index !== id)
  }

  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false

    })
    this.inputTodo=""
  }
}


