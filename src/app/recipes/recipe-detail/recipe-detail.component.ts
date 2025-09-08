import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  id: number;

  constructor(private recipeService: recipeService , private route: ActivatedRoute ){}

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShopppingList(this.recipe.ingredients);

  }
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
    }

    onEditRecipe(){
    }

}
