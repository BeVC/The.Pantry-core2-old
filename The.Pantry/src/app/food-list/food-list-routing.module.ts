import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodListOverviewComponent } from "./food-list-overview/food-list-overview.component";

const routes: Routes = [
    { path: 'foodList', component: FoodListOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodListRoutingModule { }
