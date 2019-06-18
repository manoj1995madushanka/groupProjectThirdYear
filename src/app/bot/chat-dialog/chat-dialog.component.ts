import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  // public conversation = new BehaviorSubject(Object([]));

  // constructor(private chat: ChatService) { }
  constructor(private chat: ChatService) {}

  ngOnInit() {
    // this.chat.talk();
    // this.messages = this.chat.conversation.asObservable().pipe((acc, val) => acc + val);
    // this.messages = this.chat.conversation.asObservable().scan((acc,val)=>acc.concat(val));
    this.messages = this.chat.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

}
