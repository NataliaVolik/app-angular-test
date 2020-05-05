import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/compiler/src/core";

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss']
})
export class AccordionComponent implements OnInit {
 panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }
    changeState(value){
        this.panelOpenState = value;
    }
}