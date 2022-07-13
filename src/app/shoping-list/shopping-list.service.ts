import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient []> ();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Oranges",3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  constructor() { }
}
