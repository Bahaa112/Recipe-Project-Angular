import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { recipeService } from "../recipes/recipe.service";
import { response } from "express";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient , private recipesService: recipeService , private authService: AuthService){

    }

    storeReipes(){
        const recipes = this.recipesService.getRecipes();
        return this.http.put('https://ng-course-recipe-book-e7152-default-rtdb.firebaseio.com/recipes.json' , recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){         
                 
      return this.http.get<Recipe[]>(
        'https://ng-course-recipe-book-e7152-default-rtdb.firebaseio.com/recipes.json'
      ).pipe(
    map(recipes => {         
        return recipes.map( recipe => {
            return {...recipe , ingredients: recipe.ingredients ? recipe.ingredients: []};   
        })      
                
    }), 
    tap(recipes => {             
      this.recipesService.setRecipes(recipes);         
    })
  );      
}   

}
