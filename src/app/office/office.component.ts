import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  name:string='Adi';
  phoneno:number=1234;
  example:string="background-color:red;";

  prac="../../../../../../../../adity/Desktop/download.png";
  a:number=100;
  appearance1:string="background-color:pink;";
  appearance2:string="background-color:blue;";

  constructor() { }

  ngOnInit(): void {
  }
  changeName()
  {
    this.name="Aditya"
  }
}
