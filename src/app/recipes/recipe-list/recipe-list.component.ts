import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/13/Leftover_Pork_Chop_Salad_with_Cubed_Plums.jpg'  ),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/13/Leftover_Pork_Chop_Salad_with_Cubed_Plums.jpg'  )
  ];

  constructor() { }

  ngOnInit() {
  }

}
