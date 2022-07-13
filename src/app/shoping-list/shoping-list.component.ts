import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[];

  // ingredients: Ingredient[] = [
  //   new Ingredient("Apples",5),
  //   new Ingredient("Oranges",3)
  // ];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients= this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
