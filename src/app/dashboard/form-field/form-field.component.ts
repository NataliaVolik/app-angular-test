import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.scss']

})
export class FormFieldComponent implements OnInit {
@Output() valueEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggle(data){
    this.valueEvent.emit(data);
    console.log(data)
  }

}
