import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: ['form-field.component.scss']

})
export class FormFieldComponent implements OnInit {
// @Output() valueEvent = new EventEmitter();
  parentText : string;

  constructor() { }

  ngOnInit(): void {
  }

  setChildText(childText){
    // this.valueEvent.emit(data);
    this.parentText = childText;
    console.log('form field');
  }

}
