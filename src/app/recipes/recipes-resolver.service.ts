import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { recipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageService: DataStorageService , private recipeService: recipeService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes();
        return this.dataStorageService.fetchRecipes();
    }

}