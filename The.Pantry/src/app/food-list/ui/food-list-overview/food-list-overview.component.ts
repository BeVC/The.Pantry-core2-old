import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { FoodListItemModel } from "../../models/food-list-item";

@Component({
    selector: 'app-food-list-overview',
    templateUrl: './food-list-overview.component.html',
    styleUrls: ['./food-list-overview.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FoodListOverviewComponent implements OnInit {

    constructor(
        private httpService: HttpClient
    ) { }

    apiValues: FoodListItemModel[] = [];
    ngOnInit() {
        this.httpService.get("api/FoodList")
            .subscribe((values: FoodListItemModel[]) => {
                this.apiValues = values;
            });
    }

    onRXJSTestClicked() {

    }
}
