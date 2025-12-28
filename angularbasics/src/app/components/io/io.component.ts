import { Component } from '@angular/core';
import { AComponent } from "../a/a.component";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-io',
  imports: [AComponent, ProductComponent],
  templateUrl: './io.component.html',
  styleUrl: './io.component.css'
})
export class IOComponent {

}
