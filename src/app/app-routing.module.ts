import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodSearchComponent } from './food-search/food-search.component';

const routes: Routes = [
  { path: 'food-search', component: FoodSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
