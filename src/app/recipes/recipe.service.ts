import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }
}
