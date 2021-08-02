import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likedislike',
  //templateUrl: './likedislike.component.html',
  template:`
  <button  [class]="likecounter===101?'liked like-button':'like-button'" 
  (click)="countLiked()">Like|<span class="likes-counter">{{likecounter}}</span></button>
  <button [class]="likecounter===26?'disliked dislike-button':'dislike-button'" 
  (click)="countDisliked()">Dislike|<span class="dislikes-counter">{{dislikecounter}}</span></button>
  `,
  styles:[`
  .like-button,.dislike-button{
    font-size:1rem;
    padding:5px 10px;
    color: #585858
  }
  .liked,.disliked{
    font-weight:bold;
    color:#1565c0;
  }
  `]
  //styleUrls: ['./likedislike.component.css']
})
export class LikedislikeComponent implements OnInit {
  likecounter:number=100;
  dislikecounter:number=25;
  likestatus:boolean=false;
  dislikeStatus:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  
countLiked()
{
  if(this.likestatus)
  {
    
    this.likecounter=this.likecounter-1;
    this.likestatus=false;
    
    
  }
  else{
    
    this.likecounter=this.likecounter+1;
    this.likestatus=true;

  }
}


countDisliked()
{
  if(this.dislikeStatus)
  {
    this.dislikecounter=this.dislikecounter-1;
    this.dislikeStatus=false;
  }
  else{
    this.dislikecounter=this.dislikecounter+1;
    this.dislikeStatus=true;
    this.countLiked();  
  }
}
}

/* 
import { Component } from '@angular/core';


@Component({
  selector: 'like-dislike',
  template: `
  <button  [class]="likecounter===101?'liked like-button':'like-button'" 
  (click)="countLiked()">Like | <span class="likes-counter">{{likecounter}}</span></button>
  <button [class]="dislikecounter===26?'disliked dislike-button':'dislike-button'" 
  (click)="countDisliked()">Dislike | <span class="dislikes-counter">{{dislikecounter}}</span></button>
  `,
  styles: [`
    .like-button,.dislike-button {
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

export class LikeDislikeComponent {
likecounter:number=100;
dislikecounter:number=25;
likestatus:boolean=false;
dislikestatus:boolean=false;


countLiked()
{
  if(this.likestatus)
  {
    
    this.likecounter=this.likecounter-1;
    this.likestatus=false;
    
    
  }
  else{
    
    this.likecounter=this.likecounter+1;
    this.likestatus=true; 
  }
}


countDisliked()
{
  if(this.dislikestatus)
  {
    this.dislikecounter=this.dislikecounter-1;
    this.dislikestatus=false;
  }
  else{
    this.dislikecounter=this.dislikecounter+1;
    this.dislikestatus=true;
    this.countLiked();  
  }
  
}

}*/