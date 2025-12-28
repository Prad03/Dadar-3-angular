import { Component } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-lifecycle',
  imports: [ParentComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {

}
