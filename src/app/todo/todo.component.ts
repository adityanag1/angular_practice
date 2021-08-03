import { Component } from '@angular/core';

class TodoItem{
  isDone?:boolean;
  name?:string;
}

@Component({
  selector:'app-todo',
  //templateUrl:'./todo.component.html',
  template:`
  <input [(ngModel)]="name">
  <button type="submit" (click)=add()>Add</button>
  <div class="task-counter">
  {{getRemainingCount()}} remaining out of {{items.length}} tasks
  </div>
<ul>
  <li *ngFor="let c of items" (click)=toggleItem(c) 
  [class]="c.isDone===true?'is-done':'not-done'">
  {{c.name}}
  </li>
</ul>
  `,
  //styleUrls: ['./todo.component.css']
  styles:[`
  .is-done{
    text-decoration:line-through;
  }
  `]
})
export class TodoComponent {
    
  public name: string = '';
  public items : Array<TodoItem> = [];
  public item?:TodoItem;
  
  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }
  public add() {
    if(this.name!=""){
    this.item={name:this.name,isDone:false};
    this.items.push(this.item);
    this.name="";
    }   
  }
  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }
}