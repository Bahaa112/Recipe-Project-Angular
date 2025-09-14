import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class recipeService{
    recipesChanged = new Subject<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('A Test Recipe',
            'This is a test','https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg'
        ,[
            new Ingredient('Meat',1),
            new Ingredient('French Fries',2)
        ])
    ];
    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShopppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

    }
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number , newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());

    }

}