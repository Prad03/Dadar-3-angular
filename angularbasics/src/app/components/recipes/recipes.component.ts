import { Component } from '@angular/core';
import { Recipes, RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {


  recipes!:Recipes[];

  constructor(private recipeService:RecipesService){}

  ngOnInit(){
    this.recipeService.getRecipes()
    .subscribe({
      next:(data)=>this.recipes=data.recipes
    })
  }



}
