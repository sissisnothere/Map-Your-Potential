/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit } from '@angular/core';
//import { SelectionComponent } from "../selection/selection.component";
import { Question } from "../selection/selection";
import { QuestionService } from '../selection.service';


@Component({
	selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [QuestionService]

})

export class HomeComponent implements OnInit{

	questions : Question[];	//array
	selectedQuestion: Question;	//single

	/*
	Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".
	So you should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
	*/
	constructor(private questionService : QuestionService) {

	}

	getQuestions(): void {
      //this should return an array of positions, but if it complains: " Two different types with this name exist, but they are unrelated." 
      //maybe bcause we import the position in two files, or missing import files from other location

      // this.questionService.getQuestions().then(questions => this.questions=questions);

      /*** this display the questions by the id ***/
       this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 12);
        console.log(this.selectedQuestion);  

        //this.selectedQuestion = this.questions.;
    } 


    //if implements OnInit, must have the following ngOnInit function
    //may not need it since it is called right after constructor?
	ngOnInit(): void { 
		this.getQuestions();
	}

	onOpen(open: Boolean): void {
		this.open = open;
		this.getQuestions();
	}

    open: Boolean = false;



}
