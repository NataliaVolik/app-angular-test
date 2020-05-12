import { Component, OnInit } from '@angular/core';
import {AppCounterService} from "./services/app-counter.service";
import {LocalCounterService} from "./services/local-counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent implements OnInit{

  title = 'app-angular-test';
  isPressed = false;
  isPress = false;
  color : string;

  configApp = {
      dashboard : {
        card : {
          title: 'Shiba Inu',
          subtitle: 'Dog Breed',
          content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
          button_like: 'LIKE',
          button_share: 'SHARE'
        }
      }
  };

  ngOnInit(): void {
    console.log(this.configApp);
  }

  changeEvent(newVal){
    this.isPressed = newVal.isPressed;
    this.color = newVal.color;
    debugger;
    console.log('я в app');
  }

  chColorEvent(nVal){
    this.isPress = nVal;
  }

  constructor(
      private appCounterService: AppCounterService,
      private localCounterService: LocalCounterService
  ) {}


}

