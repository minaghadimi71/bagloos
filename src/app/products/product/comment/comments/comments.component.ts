import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [{name: 'mina', message: 'it is good'}];
  constructor() { }

  ngOnInit() {
  }
getComment(comment: {name: string, message: string}) {
  this.comments.push({
    name: comment.name,
    message: comment.message,
  });
}
}
