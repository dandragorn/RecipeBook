import {Component} from '@angular/core';
import {IngredientModel} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  newIngredient?:IngredientModel;

  constructor(private slService:ShoppingListService) {
  }
  onAddItem(name:string, amount:number){
    this.newIngredient = new IngredientModel(name, amount);
    this.slService.addIngredients([this.newIngredient]);
  }

  onDeleteItem(id: string){
    if(Number(id)){
      this.slService.deleteIngredient(Number(id) - 1);
    }
    this.slService.deleteIngredient(id);
  }

  onClearItems(){
    this.slService.clearIngredients();
  }
}
