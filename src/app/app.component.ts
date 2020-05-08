import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-angular-test';
  isPressed = false;
  isPress = false;

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

  changeEvent(){
    this.isPressed = !this.isPressed;
    console.log('я в app');
  }

  chColorEvent(){
    this.isPress = !this.isPress;
  }
}

