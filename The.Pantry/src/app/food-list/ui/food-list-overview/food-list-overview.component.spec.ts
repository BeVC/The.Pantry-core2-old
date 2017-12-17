import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

//import { HttpClient } from "@angular/common/http";

import { FoodListOverviewComponent } from './food-list-overview.component';
import { PopupDeleteComponent } from "../../../shared/ui/popup-delete/popup-delete.component";
import { PopupAddFooditemComponent } from "../popup-add-fooditem/popup-add-fooditem.component";
import { DropdownComponent } from "../../../shared/ui/widgets/dropdown/dropdown.component";

describe('FoodListComponent', () => {
    let component: FoodListOverviewComponent;
    let fixture: ComponentFixture<FoodListOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FoodListOverviewComponent,
                PopupDeleteComponent,
                PopupAddFooditemComponent,
                DropdownComponent
            ],
            imports: [
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FoodListOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

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
