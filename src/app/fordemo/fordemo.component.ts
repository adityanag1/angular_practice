import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  numbers:number[]=[1,2,3,4,5];
  public tdate=new Date();
  public colors=['Red','Green','Pink','Yellow','Blue','Orange'];
  emp:Employee=new Employee(1,"Adi",1000);
  employees:Employee[]=[
    {id:1,name:"Adi",salary:4321},
    {id:2,name:"shreya",salary:1234},
    {id:3,name:"harsh",salary:3245},
    {id:4,name:"kedar",salary:2000},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}

class Employee
{
  id:number;
  name:string;
  salary:number;

  constructor(id:number,name:string,salary:number){
    this.id=id;
    this.name=name;
    this.salary=salary;
  }
}
