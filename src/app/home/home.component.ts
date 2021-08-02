import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
  <h1>Home Component</h1>
  <h2>This is from  typescript file</h2>
  <button [class]="likecounter===101?'liked like-button':'like button'" (click)="countliked()">Like|<span class="likes-counter">{{likecounter}}</span></button>
  <button [class]="dislikecounter===26?'disliked dislike-button  ':'dislike button'" (click)="countdisliked()">Dislike|<span class="likes-counter">{{dislikecounter}}</span></button>
  `,
  //templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
  styles:[`
    .like-button, .dislike-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:   #585858;
    }

    .liked, .disliked {
        font-weight: bold;
        color: #1565c0;
    }
  `]
})
export class HomeComponent implements OnInit {
likecounter:number=100;
dislikecounter:number=26;
likedstatus:boolean=false;
dislikedstatus:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
countliked()
{
  if(this.likedstatus)
  {
    this.likecounter=this.likecounter-1;
    this.countdisliked();
    this.likedstatus=false;
  }
  else{
    this.likecounter=this.likecounter+1;
    this.likedstatus=true;
  }
}
countdisliked()
{
  if(this.dislikedstatus)
  {
    this.dislikecounter=this.dislikecounter+1;
    
    this.dislikedstatus=false;
  }
  else{
    this.dislikecounter=this.dislikecounter-1;
    this.countliked();
    this.dislikedstatus=true;
  }
}
}
