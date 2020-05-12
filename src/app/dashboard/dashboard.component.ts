import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {AppCounterService} from "../services/app-counter.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() config: any;
  @Output() changeColor = new EventEmitter();
  @Output() chColor = new EventEmitter();
  color: string;
  // isPressed = false;
  // isPress = false;
  constructor(
      private appCounterService : AppCounterService
  ) {
    this.appCounterService.colorGet.subscribe((value:string)=> {
      this.color = value;
      console.log(this.color);
    })
  }

  ngOnInit(): void {
  }

  onChange(newValue){
     this.changeColor.emit(newValue);
    // this.isPressed = !this.isPressed;
     console.log('dashboard event');
  }
  changeTxt(newVal){
    this.chColor.emit(newVal);
    // this.isPress = !this.isPress;
  }

}
