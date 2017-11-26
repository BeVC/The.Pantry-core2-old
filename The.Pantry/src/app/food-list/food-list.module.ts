import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodListRoutingModule } from './food-list-routing.module';
import { FoodListOverviewComponent } from './food-list/food-list-overview.component';

@NgModule({
  imports: [
    CommonModule,
    FoodListRoutingModule
  ],
  declarations: [FoodListOverviewComponent]
})
export class FoodListModule { }
