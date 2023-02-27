import {Injectable} from '@angular/core';
import {IngredientModel} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Tomato',10),
    new IngredientModel('Banana',15)

  ];

  getIngredients(){
    return this.ingredients;
  }

  addIngredients(ingredient:IngredientModel[]){
    this.ingredients.push(...ingredient);
  }
  deleteIngredient(id: number | string){
    if (typeof id === 'number') {
      this.ingredients.splice(id, 1);
    }
    const index = this.ingredients.findIndex(ingredient => ingredient.name.toLowerCase() === id.toString().toLowerCase());
      if (index !== -1) {
        this.ingredients.splice(index, 1);
      }
  }
  clearIngredients(){
    this.ingredients.length = 0;
  }
}
