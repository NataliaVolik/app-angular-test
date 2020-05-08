import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() config : any;
  @Output() change = new EventEmitter();
  @Output() changeText = new EventEmitter();
  isPressed = false;
  isPress = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChanged(){
    this.isPressed = !this.isPressed;
    this.change.emit();
  }

  changeColor(){
    this.isPress = !this.isPress;
    this.changeText.emit();
  }


}
