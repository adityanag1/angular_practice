import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 

type MenuItem = {
  title: string;
  subItems?: string[];
};
 
//do not modify
type MenuConfig = MenuItem[];

@Component({
  selector: 'app-menuconfig',
  //templateUrl: './menuconfig.component.html',
  template:`
  <div class="menu-wrapper">
    <div *ngFor= "let m of menuConfig; let i=index" 
    attr.data-test-id="first-level-{{m.title | lowercase}}">
    {{m.title}}
    <button *ngIf= "m.subItems?.length" (click)="onClick(i)" 
    attr.data-test-id="button-{{m.title | lowercase}}"> 
    {{buttonState[i]? "Hide": "Expand"  }} </button>
    <ul *ngIf='buttonState[i]' attr.data-test-id=  "ul-{{m.title | lowercase}}">
    <li *ngFor = "let j of m.subItems" 
    attr.data-test-id=  "li-{{m.title | lowercase}}-{{j | lowercase}}" >
    {{j}}
    </li>
    </ul>
    </div>
    </div>
  `,
  styleUrls: ['./menuconfig.component.css']
})
export class MenuconfigComponent  {
  title = 'PracticeCodility';
  @Input() menuConfig: MenuConfig = [];
 
  constructor() {
    this.menuConfig = [
  {
    title: "Home",
    subItems: []
  },
  {
    title: "Services",
    subItems: ["Cooking","Cleaning"]
  },
  {
    title: "Contact",
    subItems: ["Phone","Mail"]
  }]
} 
  
buttonState:boolean[] = [];  
 onClick(j:number)
 {
    for(let i=0; i<this.menuConfig.length;i++)
    {
      this.buttonState[i]= (i==j)?!this.buttonState[i]:false; 
    }
 }
}