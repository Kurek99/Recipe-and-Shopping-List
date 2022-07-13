import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
      'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('A Test Recipe',
     'This is simply a test', 
     'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',
     [
      new Ingredient('Bread',1),
      new Ingredient('Meat', 2)
     ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  constructor(private slService: ShoppingListService) { }
}
