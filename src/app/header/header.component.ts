import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppCounterService} from "../services/app-counter.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  counter : number;

  constructor(
      private appCounterService : AppCounterService
  ) {
    this.appCounterService.numberEvent.subscribe((counter:number)=>{
      this.counter = counter;
    })
  }

  ngOnInit(): void {
  }
  sendPrimary(col:string){
    this.appCounterService.colorGet.next(col);

  }
  sendWarn(){
    this.appCounterService.colorGet.next('warn');
  }



}
