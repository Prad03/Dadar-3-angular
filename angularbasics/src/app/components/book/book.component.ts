import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  paramValue=undefined;

  constructor(private activatedRoute:ActivatedRoute)
  {
        
  }

  ngOnInit()
  {
    this.activatedRoute.params.subscribe({
      next:(value)=>this.paramValue=value["id"] 
    })


    this.activatedRoute.queryParams.subscribe({
      next:(value)=>console.log(value)
    })
    
  }

}
