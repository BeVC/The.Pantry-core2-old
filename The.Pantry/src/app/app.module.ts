import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

import { FoodListModule } from "./food-list/food-list.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        //FormsModule,
        //HttpClientModule,
        FoodListModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
