import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  // ingredients: Ingredient[] = [
  //   new Ingredient("Apples",5),
  //   new Ingredient("Oranges",3)
  // ];
  private igChangeSub: Subscription;
  
  constructor(private slService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
