import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class recipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('A Test Recipe','This is a test','https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}