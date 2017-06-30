/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { Position } from "../position-detail/position";


@Component({
    selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})


export class HomeComponent {

    
    positions = POSITIONS;

    selectedPosition: Position;
    onSelect(position: Position): void {
    	this.selectedPosition = position;
    }

  
    position : Position = {
    	id: 0,
    	name: 'none'
    };
    
   
}


//a class member cannot have the 'const' keyword inside the class
const POSITIONS : Position[] = [
      { id: 11, name: "Software Developer"},
      { id: 12, name: "System Engineer"},
      { id: 13, name: "Validation Engineer"},
      { id: 14, name: "Network Developer"},
      { id: 15, name: "Security Engineer"},
      { id: 16, name: "Database Administration"}
]; 