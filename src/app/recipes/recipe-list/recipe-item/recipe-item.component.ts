import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeModel} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipeItem?:RecipeModel;

  onSelect(){
    this.recipeSelected.emit();
  }
}
