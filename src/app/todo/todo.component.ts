/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import {Wizard} from "clarity-angular";
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
   @Output() deleteItem = new EventEmitter();

   //create a function here:
   	onDelete() {
   		console.log('deleted');
   		this.deleteItem.emit(this.todoItem);
  	}

  	validateLoading: boolean = false;
  	submitLoading: boolean = false;

	  validateDemo() {
	    this.validateLoading = true;
	    //Validating Logic
	    this.validateLoading = false;
	  }

	  submitDemo() {
	    this.submitLoading = true;
	    //Submit Logic
	    this.submitLoading = false;
	    console.log('click');
	  }

	 //sample data for todolist
	firstTodoItem = {
		id: 1,
		name: "Homework",
		important: "high",
		isHightlight: false,
		duedate: null
    };
    
    TodoItems = [{
        id: 1,
        name: "others",
        important: "high",
        isHightlight: false,
        duedate: null
      },
      {
        id: 2,
        name: "Homework",
        important: "high",
        isHightlight: false,
        duedate: null
      },
      {
        id: 3,
        name: "housework",
        important: "high",
        isHightlight: false,
        duedate: null
      }];

}


