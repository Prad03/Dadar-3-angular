import { Component } from '@angular/core';
import { SenderComponent } from "../sender/sender.component";
import { ReceiverComponent } from "../receiver/receiver.component";

@Component({
  selector: 'app-subject',
  imports: [SenderComponent, ReceiverComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

}
