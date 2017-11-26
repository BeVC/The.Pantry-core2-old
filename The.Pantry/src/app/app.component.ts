import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(
        private httpService: HttpClient
    ) { }

    apiValues: string[] = [];
    ngOnInit() {
        this.httpService.get('/api/values').subscribe(values => {
            this.apiValues = values as string[];
        });
    }
}
