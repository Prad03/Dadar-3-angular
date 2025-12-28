import { Component } from '@angular/core';
import { BComponent } from "../b/b.component";

@Component({
  selector: 'app-a',
  imports: [BComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  data={id:101,name:"Anuja"}
  receivedData=""

  receiveMessage(data:string)
  {
      this.receivedData=data;
  }

}
