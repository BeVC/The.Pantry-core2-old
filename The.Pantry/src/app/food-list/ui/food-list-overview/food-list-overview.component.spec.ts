import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListOverviewComponent } from './food-list-overview.component';
import { PopupDeleteComponent } from "../../../shared/ui/popup-delete/popup-delete.component";

describe('FoodListComponent', () => {
    let component: FoodListOverviewComponent;
    let fixture: ComponentFixture<FoodListOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FoodListOverviewComponent,
                PopupDeleteComponent
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
});
