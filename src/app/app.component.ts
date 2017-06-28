//need to import app compoent 
//component is a directive with a view

import { Component } from '@angular/core';
import { Router } from '@angular/router';

//component must provide following fields
@Component({
    selector: 'my-app',	//is loaded in index.html , standard form using dash
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

//name of the class
export class AppComponent {

	name = "world";
    closeMessage: string = "";
    indeterminateState: boolean = true;

    onClose(): void {
        this.closeMessage = "The alert has been closed";
    }

    users: any[];
    selected: any[] = [];
    toAdd: any[] = [];
    toDelete: any[] = [];
    toEdit: any;


    constructor(private router: Router) {
    	this.users = [
            { name: "alice" },
            { name: "bob" },
            { name: "carol" },
        ];
    }

     onDelete() {
        this.toDelete = this.selected.slice();
        return false;
    }

    onEdit() {
        this.toEdit = this.selected[0];
        return false;
    }

    onAdd() {
        this.toAdd = this.selected.slice();
    }

    selected1: boolean = false;
    selected2: boolean = true;
    selected3: boolean = true;
    indeterminate1: boolean = true;

   
}
