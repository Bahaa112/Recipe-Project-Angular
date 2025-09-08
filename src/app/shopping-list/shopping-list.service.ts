import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10),
    ];
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        //for(let ingredient of ingredients) {
          //  this.addIngredient(ingredient);
        //}
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }
    
}