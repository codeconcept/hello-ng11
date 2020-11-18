import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { spoonacularKey } from './apiKeys.js';

@Injectable({
  providedIn: 'root',
})
export class SpoonService {
  URL = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) {}

  getRecipeByIngredients(ingredients: string) {
    const allIngredients = ingredients.split(',').map((ing) => ing + '%2C').join('');
    const fullURL = `${this.URL}/recipes/findByIngredients?number=5&ranking=1&ingredients=${allIngredients}&apiKey=${spoonacularKey}`;

    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    // headers.set('X-RapidAPI-Key', spoonacularKey);
    console.log(spoonacularKey, fullURL, allIngredients);
    return this.http.get<any>(fullURL, { headers });
  }
}
