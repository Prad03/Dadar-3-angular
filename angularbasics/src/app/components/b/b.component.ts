import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
   @Input() rdata:any=null;
   @Output() eventEmitter=new EventEmitter<string>()

   sendMessage()
   {
      this.eventEmitter.emit("Data from child")
   }
}
