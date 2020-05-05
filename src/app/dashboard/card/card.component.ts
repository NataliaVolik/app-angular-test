import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() config : any;
  @Output() change = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onChanged(color){

    this.change.emit(color);
  }



}
