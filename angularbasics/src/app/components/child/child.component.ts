import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Input() data="Hello"

 constructor()
 {
    console.log("constructor",this.data)
 }

 ngOnInit()
 {
   console.log("ngOnInit",this.data)
 }

 ngOnChanges(changes:SimpleChanges)
 {
   console.log("ngOnChanges",changes)
 }

 ngDoCheck()
 {
  console.log("ngDoCheck")
 }

 ngOnDestroy()
 {
  console.log("Component destroyed")
 }

}
