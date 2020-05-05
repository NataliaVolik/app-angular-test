import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() childToParent = new EventEmitter <any>();


  constructor() { }

  ngOnInit(): void {
  }
  sendToParent(message){
    this.childToParent.emit(message);
  }
}
