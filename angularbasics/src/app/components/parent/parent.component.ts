import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  username="Nisha"
  isVisible=true;

  changeVisibility()
  {
    this.isVisible=!this.isVisible;
  }

  // changeUsername('Ankita')
  changeUsername(name:string){
     this.username=name;
  }

}
