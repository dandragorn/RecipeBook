import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipesList: RecipeModel[] = [
    new RecipeModel('Test 1','Description text','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new RecipeModel('Test 2','Description text','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
  ];


  onRecipeSelected(recipeElement:RecipeModel){
    this.recipeWasSelected.emit(recipeElement);
  }
}
