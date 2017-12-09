import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDeleteComponent } from './ui/popup-delete/popup-delete.component';
import { DropdownComponent } from './ui/widgets/dropdown/dropdown.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        PopupDeleteComponent,
        DropdownComponent
    ],
    declarations: [
        PopupDeleteComponent,
        DropdownComponent
    ]
})
export class SharedModule { }
