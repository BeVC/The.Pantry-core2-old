import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FoodListService } from './food-list.service';

describe('FoodListService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [FoodListService]
        });
    });

    it('should be created', inject([FoodListService], (service: FoodListService) => {
        expect(service).toBeTruthy();
    }));
});
