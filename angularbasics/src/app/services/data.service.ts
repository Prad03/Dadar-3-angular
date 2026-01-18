import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 subject= new Subject<string>();

 sendMessage(data:string)
 {
    this.subject.next(data)
 }


}
