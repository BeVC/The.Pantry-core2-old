import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";

import { FoodListRoutingModule } from './food-list-routing.module';
import { FoodListOverviewComponent } from './ui/food-list-overview/food-list-overview.component';
import { PopupAddFooditemComponent } from './ui/popup-add-fooditem/popup-add-fooditem.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        FoodListRoutingModule
    ],
    declarations: [FoodListOverviewComponent, PopupAddFooditemComponent]
})
export class FoodListModule { }
