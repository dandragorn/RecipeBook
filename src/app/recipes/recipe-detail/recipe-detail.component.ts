import {Component, OnInit} from '@angular/core';

import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem?: RecipeModel;
  id?: number;

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeItem = this.recipeService.getRecipe(this.id);
    });
  }

  constructor(private recipeService: RecipeService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  onAddToShoppingList(){
    if (this.recipeItem)
      this.recipeService.addToShoppingList(this.recipeItem.ingredients);
  }

  onRecipeEdit(){
    //this.router.navigate(['edit'],{relativeTo: this.activeRoute})
    this.router.navigate(['../',this.id,'edit'],{relativeTo: this.activeRoute})
  }
}
