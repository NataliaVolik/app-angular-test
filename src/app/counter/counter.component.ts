import { Component} from '@angular/core';
import {AppCounterService} from "../services/app-counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter = 0;
  constructor(
      public appCounterService: AppCounterService
  ) { }

  increase(){
    this.counter ++;
    this.appCounterService.numberEvent.next(this.counter);

  }
  decrease(){
    this.counter --;
    this.appCounterService.numberEvent.next(this.counter);
  }

}
