import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddFooditemComponent } from './popup-add-fooditem.component';
import { DropdownComponent } from "../../../shared/ui/widgets/dropdown/dropdown.component";

describe('PopupAddFooditemComponent', () => {
  let component: PopupAddFooditemComponent;
  let fixture: ComponentFixture<PopupAddFooditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            PopupAddFooditemComponent,
            DropdownComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
