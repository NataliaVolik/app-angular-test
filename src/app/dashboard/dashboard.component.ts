import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() config: any;
  @Output() changeColor = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(color){
     this.changeColor.emit(color);
     console.log('dashboard event');
  }

  getEvent(data){
    console.log(data);
  }
}
