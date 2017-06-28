/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import {WizardDeprecated} from "clarity-angular";
//import {MyValidationService} from "service/my-validation";

@Component({
	selector:'todo-list',
    styleUrls: ['./todo.component.scss'],
    templateUrl: './todo.component.html',
    //providers: [MyValidationService]
})



export class TodoComponent {

   //assign a value call name, and assign an value to it
   //so we can use {{name}} in DOM
   //name = 'The Redemption';
   //tell Angular that we want it to support any property bindings place on instances of the todoItem elements, 
   //where the property name is todoItem
   @Input() todoItem;


   //create a function here:
   onDelete() {
   		console.log('deleted');
   }
}

