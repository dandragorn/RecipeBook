import { Component } from '@angular/core';
import {IngredientModel} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Tomato',10)
  ];
}
