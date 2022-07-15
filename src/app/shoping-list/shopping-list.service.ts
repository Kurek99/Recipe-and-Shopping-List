import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingridient.model';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient []> ();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Oranges",3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  constructor() { }
}
