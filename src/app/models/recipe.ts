export interface Recipe {
  id?: number;
  title: string;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: any[];
  unusedIngredients: any[];
  usedIngredientCount: number;
  usedIngredients: any[];
}
