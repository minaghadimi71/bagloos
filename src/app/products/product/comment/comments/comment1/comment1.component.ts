import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comment1',
  templateUrl: './comment1.component.html',
  styleUrls: ['./comment1.component.css']
})
export class Comment1Component implements OnInit {
  name: string = '' ;
  message: string = '';
  email: string = '';
  @Output() comment = new EventEmitter<{name: string, message: string}>();
  constructor() { }

  ngOnInit() {
  }
    submit(name: string, message: string) {
      name = name.trim();
      message = message.trim();
      this.email = this.email.trim();
      if (!name || !message || !this.email) {
        return;
      }
    this.name = name;
    this.message = message;
    this.comment.emit({
      name: this.name,
      message: this.message,
    });
    }
}
