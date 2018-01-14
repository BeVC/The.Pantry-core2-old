import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable"

import { FoodListItemModel } from "../models/food-list-item";

@Injectable()
export class FoodListService {

    constructor(
        private httpService: HttpClient
    ) { }

    getAsync(): Observable<FoodListItemModel[]> {
        return this.httpService.get<FoodListItemModel[]>("api/FoodList");
    }

}
