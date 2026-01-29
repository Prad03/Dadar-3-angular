import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //  addCategory("Electronics")
  addCategory(category:string)
  {
      alert(category+" Category added")
  }

  

  
}
