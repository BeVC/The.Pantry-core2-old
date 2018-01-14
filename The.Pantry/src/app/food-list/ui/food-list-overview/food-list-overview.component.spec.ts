import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { FoodListService } from "../../service/food-list.service";

import { FoodListOverviewComponent } from './food-list-overview.component';
import { PopupDeleteComponent } from "../../../shared/ui/popup-delete/popup-delete.component";
import { PopupAddFooditemComponent } from "../popup-add-fooditem/popup-add-fooditem.component";
import { DropdownComponent } from "../../../shared/ui/widgets/dropdown/dropdown.component";

import { FoodListItemModel } from "../../models/food-list-item";

describe('FoodListComponent', () => {
    let component: FoodListOverviewComponent;
    let fixture: ComponentFixture<FoodListOverviewComponent>;
    let foodListService: FoodListService;
    let el: DebugElement;
    let spy;

    let col: FoodListItemModel[] = [
        {
            name: "spaghetti",
            date: new Date(),
            location: "diepvries",
            quantity: 5
        },
        {
            name: "stoofvlees",
            date: new Date(),
            location: "diepvries",
            quantity: 1
        },
        {
            name: "couscous met worst",
            date: new Date(),
            location: "diepvries",
            quantity: 1
        }
    ]

    beforeEach(async(() => {
        //TestBed.configureTestingModule({
        //    declarations: [
        //        FoodListOverviewComponent,
        //        PopupDeleteComponent,
        //        PopupAddFooditemComponent,
        //        DropdownComponent
        //    ],
        //    imports: [
        //        FoodListService
        //    ]
        //})
        //    .compileComponents();
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                FoodListOverviewComponent,
                PopupDeleteComponent,
                PopupAddFooditemComponent,
                DropdownComponent
            ],
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                FoodListService
            ]
        });

        fixture = TestBed.createComponent(FoodListOverviewComponent);
        component = fixture.componentInstance;

        //fixture.detectChanges();

        foodListService = fixture.debugElement.injector.get(FoodListService);
        //spy = spyOn(foodListService, 'getAsync')
        //    .and.returnValue({ subscribe: () => col });

        spy = spyOn(foodListService, 'getAsync')
            .and.returnValue(Observable.of(col));

        //let el = fixture.debugElement.query(By.css("tester"));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("before ngOnInit", fakeAsync(() => {
        expect(component.apiValues.length).toBe(0, 'nothing displayed');        
        expect(spy.calls.any()).toBe(false, 'getAsync not yet called');
    }));

    it('should have called service', fakeAsync(() => {
        component.ngOnInit();

        fixture.whenStable().then(() => { // wait for async getQuote
            component.apiValues;
            expect(component.apiValues.length).toBe(3, 'collection displayed');
            expect(spy.calls.any()).toBe(true, 'getAsync called');
        });
    }));

    //it('expects a GET request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    //    // Make an HTTP GET request, and expect that it return an object
    //    // of the form {name: 'Test Data'}.
    //    http
    //        .get('/api/FoodList')
    //        .subscribe(data => expect(data['name']).toEqual('Test Data'));

    //    // At this point, the request is pending, and no response has been
    //    // sent. The next step is to expect that the request happened.
    //    const req = httpMock.expectOne('/api/FoodList');

    //    // If no request with that URL was made, or if multiple requests match,
    //    // expectOne() would throw. However this test makes only one request to
    //    // this URL, so it will match and return a mock request. The mock request
    //    // can be used to deliver a response or make assertions against the
    //    // request. In this case, the test asserts that the request is a GET.
    //    expect(req.request.method).toEqual('GET');

    //    // Next, fulfill the request by transmitting a response.
    //    req.flush({ name: 'Test Data', date: new Date(), location: "diepvries", quantity: 5 });

    //    // Finally, assert that there are no outstanding requests.
    //    httpMock.verify();
    //}));
});
