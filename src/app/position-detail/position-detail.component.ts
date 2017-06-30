/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from "@angular/core";
//if the file is in current folder/same level: need to have ./in front of the folder name
import { Position } from './position';


@Component({
    selector: 'position-detail',
    styleUrls: ['./position-detail.component.scss'],
    templateUrl: './position-detail.component.html',
})

//1. this is the new class of job Position, has property id and name
// because we have a new class here /new component, need to add to app.module, otherwise error
export class PositionDetailComponent {
	//ini class Position 
	//declare that hero is an input property, so data can do two way binding
	@Input() position : Position;

}


 

