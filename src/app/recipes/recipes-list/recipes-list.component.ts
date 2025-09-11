import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit , OnDestroy {
  recipes: Recipe[]=[];
  subscription: Subscription;

  constructor(private recipeService: recipeService){

  }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>
    {
      this.recipes = recipes;
    });
      this.recipes=this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }


}
