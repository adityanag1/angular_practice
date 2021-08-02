import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  lighton="../../assets/lighton.jpeg";
  lightofff="../../assets/lightoff.jfif";
  value:string='Turn Off';
  task2="font-size: medium;background-color: aqua;"
  newimg="../../assets/123.jpg";
  imgclick:boolean=false;
  click:boolean=false;
  constructor() { }


  ngOnInit(): void {
  }
  
  lightoff()
  {
    this.lighton="../../assets/lightoff.jfif";
    this.value='Turn On';
    this.task2="font-size:large; background-color:red;";
  }
  changeimg()
  {
    this.lighton="../../assets/123.jpg";       
    this.imgclick=true;
  }
}













/* if(this.click==false){
  this.click=true;
}
else{
  this.click=true;
  this.lighton="../../assets/lighton.jpeg";
} */