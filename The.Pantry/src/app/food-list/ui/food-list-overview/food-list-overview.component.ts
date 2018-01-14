import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";

import { FoodListService } from "../../service/food-list.service";

import { FoodListItemModel } from "../../models/food-list-item";

@Component({
    selector: 'app-food-list-overview',
    templateUrl: './food-list-overview.component.html',
    styleUrls: ['./food-list-overview.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FoodListOverviewComponent implements OnInit {

    constructor(
        //private httpService: HttpClient
        private foodListService: FoodListService
    ) { }

    apiValues: FoodListItemModel[] = [];

    apiValues$ = new Observable<FoodListItemModel[]>();
    term$ = new Subject<string>();
    filteredTest$ = new Observable<FoodListItemModel[]>();

    ngOnInit() {
        this.foodListService.getAsync()
            .subscribe(response => {
                this.apiValues = response;
            });

        this.apiValues$ = this.foodListService.getAsync();

        this.filteredTest$ = Observable.combineLatest(
            this.apiValues$, this.term$, this.filterResults
        )
    }

    onRXJSTestClicked() {
        this.term$.next("st");
    }

    search(term) {
        this.term$.next(term);
    }

    filterResults(data: FoodListItemModel[], word: string): FoodListItemModel[] {
        return data.filter(item => item.name.includes(word));
    }
}
