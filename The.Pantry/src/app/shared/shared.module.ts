import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDeleteComponent } from './ui/popup-delete/popup-delete.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        PopupDeleteComponent
    ],
    declarations: [PopupDeleteComponent]
})
export class SharedModule { }
