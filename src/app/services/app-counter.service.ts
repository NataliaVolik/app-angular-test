import {Injectable} from "@angular/core";
import {LogService} from "./log.service";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AppCounterService{
    counter = 0;

    colorGet = new Subject();

    numberEvent = new Subject();


    constructor(
        private logService: LogService
    ){

    }

    increase(){
        this.logService.log('increase counter....');
        this.counter++
    }
    decrease(){
        this.logService.log('decrease counter....');
        this.counter--
    }
}
