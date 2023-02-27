import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipesList: RecipeModel[] = [
    new RecipeModel(
      'Schnitzel',
      'Description text',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new IngredientModel('Meat',1),
        new IngredientModel('Salt',1)]
    ),
    new RecipeModel(
      'Big Fat Burger',
      'Description text',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [new IngredientModel('bread',2)]
    ),
  ];

  getRecipes(){
    return this.recipesList.slice();
  }
  constructor(private shoppingListService: ShoppingListService) { }

  addToShoppingList(ingredients: IngredientModel[]){
    this.shoppingListService.addIngredients(ingredients)
  }

  getRecipe(id: number){
    return this.recipesList[id];
  }
}
