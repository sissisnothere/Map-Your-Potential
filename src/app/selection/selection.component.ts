/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, OnInit } from "@angular/core";
//if the file is in current folder/same level: need to have ./in front of the folder name
import { Question } from "../selection/selection";
import { QuestionService } from '../selection.service';

@Component({
    selector: 'selection',
    styleUrls: ['./selection.component.scss'],
    templateUrl: './selection.component.html',
    providers: [QuestionService]
})

//1. this is the new class of job Position, has property id and name
// because we have a new class here /new component, need to add to app.module, otherwise error
export class SelectionComponent implements OnInit {

	//declare that hero is an input property, so data can do two way binding
	@Input() question : Question;


	questions : Question[];	//array
	selectedQuestion: Question;	//single
	//passAnswer: Question.answer;

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

      /*** this is the first question: id is 12 ***/
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

    onNext(id: any, answer : string): void {

    	//write logics here:
    	if(id == 11 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 12);
    	}
    	else if(id == 11 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 13);
    	}
    	else if(id == 12 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 11);
    	}
    	else if(id == 12 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 13);
    	}
    	else if(id == 13 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 15);
    	}
    	else if(id == 13 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 14); 
    	}
    	else if(id == 14 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 13);  
    	}
    	else if(id == 14 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 16);
    	}
    	else if(id == 15 && answer === "A") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 16);
    	}
    	else if(id == 15 && answer === "B") {
    		this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 12);  
    	}
    	else if(id == 16) {
    		//this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 1);

    	}

    	//this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 11);
        console.log(this.selectedQuestion);  
    }
}


 

