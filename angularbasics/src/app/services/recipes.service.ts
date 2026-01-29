import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Recipes
{
  id:number,
  name:string,
  ingredients:string[],
  instructions:string[],
  image:string,
  rating:number
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpClient:HttpClient) { }

  getRecipes()
  {
        return this.httpClient.get<{"recipes":Recipes[]}>("https://dummyjson.com/recipes")
  }
}
