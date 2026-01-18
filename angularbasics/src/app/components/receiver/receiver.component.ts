import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {

  constructor(private dataService:DataService)
  {

  }

  receivedMessage=""

  ngOnInit()
  {
     this.dataService.subject.subscribe({
      next:(value)=>this.receivedMessage=value
     })
  }

}
