import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: 'grid-list.component.html',
  styleUrls: ['grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  isClik = false;

  constructor() { }

  ngOnInit(): void {
  }
  clEvent(){
    this.isClik = !this.isClik;
  }

}
