import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit {

    isOpen: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    uiOnSelectBoxClicked() {
        this.isOpen = true;
    }

    uiOnSelect() {
        this.isOpen = false;
        //this.activeDDLOption = selection

        //if (selection.value !== "-1") {
        //    this.ddlSelection.emit(selection.value);
        //}
    }
}
