/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})

export class HomeComponent {

    //new instance of job position
  
    position : Position = {
    	id: 0,
    	name: 'none'
    };
    

    //create an array of position 

    //a class member cannot have the 'const' keyword
   // const POSITIONS : Position[] = [
    POSITIONS : Position[] = [
    	{ id: 11, name: "Software Developer"},
    	{ id: 12, name: "System Engineer"},
    	{ id: 13, name: "Validation Engineer"},
    	{ id: 14, name: "Network Developer"},
    	{ id: 15, name: "Security Engineer"},
    	{ id: 16, name: "Database Administration"}
    ]; 

    positions = this.POSITIONS
   
     
}

//this is the new class of job Position, has property id and name
export class Position {
	id : number;
	name : string;

}