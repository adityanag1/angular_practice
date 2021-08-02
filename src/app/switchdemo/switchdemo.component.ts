import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})

export class SwitchdemoComponent implements OnInit {
  color:string='red';
  constructor() { }
  ngOnInit(): void {
  }
}
