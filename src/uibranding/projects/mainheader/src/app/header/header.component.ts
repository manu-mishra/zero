import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { DOCUMENT } from '@angular/common'; 

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
    constructor() { }
    leftNavVisible=false;
    leftNavWidth='0px';
    ngOnInit() { }
    ToggleLeftNav()
    {
        if(!this.leftNavVisible)
        {
            this.leftNavVisible =true;
            this.leftNavWidth ='250px';
        }
        else
        {
            this.leftNavVisible =false;
            this.leftNavWidth ='0px';
        }
    }
}
