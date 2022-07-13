import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newIngredient =new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }
}
