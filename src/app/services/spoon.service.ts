import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { spoonacularKey } from './apiKeys.js';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.js';

@Injectable({
  providedIn: 'root',
})
export class SpoonService {
  URL = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) {}

  getRecipeByIngredients(ingredients: string): Observable<Recipe[]> {
    const allIngredients = ingredients
      .split(',')
      .map((ing) => ing + '%2C')
      .join('');
    const fullURL = `${this.URL}/recipes/findByIngredients?number=5&ranking=1&ingredients=${allIngredients}&apiKey=${spoonacularKey}`;

    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.http.get<Recipe[]>(fullURL, { headers });
  }
}
