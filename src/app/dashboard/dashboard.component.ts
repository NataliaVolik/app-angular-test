import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() config: any;
  @Output() changeColor = new EventEmitter();
  @Output() chColor = new EventEmitter();
  isPressed = false;
  isPress = false;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
     this.changeColor.emit();
    this.isPressed = !this.isPressed;
     console.log('dashboard event');
  }
  changeTxt(){
    this.chColor.emit();
    this.isPress = !this.isPress;
  }

}
