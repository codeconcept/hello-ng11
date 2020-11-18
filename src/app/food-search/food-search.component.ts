import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { SpoonService } from '../services/spoon.service';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css'],
})
export class FoodSearchComponent implements OnInit {
  ingredients = 'tomato, bread flouer';
  recipes$: Observable<Recipe[]> = null;

  constructor(private spoonService: SpoonService) {}

  ngOnInit(): void {}

  search(form: FormGroup) {
    if (form.valid) {
      this.recipes$ = this.spoonService.getRecipeByIngredients(
        this.ingredients
      );
    }
  }
}
