import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender',
  imports: [FormsModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  message=""

  constructor(private dataService:DataService)
  {

  }

  send()
  {
    this.dataService.sendMessage(this.message)
  }

}
