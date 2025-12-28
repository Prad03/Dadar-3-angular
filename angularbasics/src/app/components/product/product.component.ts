import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

 @Input() id!:number;
 @Input() name!:string;
 @Input() imageLink!:string;
 @Input() price!:number;

}
