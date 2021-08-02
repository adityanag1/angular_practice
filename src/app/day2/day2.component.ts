import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-day2',
  template: `
  <br><br>
  {{title}}<br>
  <input type="text" [(ngModel)]="title"/>
  <p [class]="status ? classstyle1:classstyle2">Hello</p>
  `,
  //styleUrls: ['./day2.component.css']
  styles: ['.style1{background-color:green}','.style2{background-color:red}']
})
export class Day2Component implements OnInit {

  title:string='sample';
  name:string='jack';
  status:boolean=false;
  classstyle1="style1";
  classstyle2="style2";
  constructor() { }

  ngOnInit(): void {
  }

}
