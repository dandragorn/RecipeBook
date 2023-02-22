import {Component, EventEmitter, Output} from '@angular/core';
import {IngredientModel} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() newIngredientEvent = new EventEmitter<IngredientModel>();
  newIngredient?:IngredientModel;
  onAddItem(name:string, amount:number){
    this.newIngredient = new IngredientModel(name, amount);
    this.newIngredientEvent.emit(this.newIngredient);
  }
}
