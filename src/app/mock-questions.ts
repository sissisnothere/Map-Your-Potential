import { Question } from "./selection/selection";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const QUESTIONS : Question[] = [

	  { id: 11, question: "Do you like to be a Software Developer?", answer : [{ key: "A" , value: "I do like it" }, { key: "B" , value: "Nope.." }] },
    { id: 12, question: "Do you like to be a System Engineer?", answer : [{ key: "A" , value: "Yes" }, { key: "B" , value: "hm.. I'd rather not." }] },
    { id: 13, question: "Do you like to be a Validation Engineer?", answer : [{ key: "A" , value: "Sure, why not" }, { key: "B" , value: "No" }] },
    { id: 14, question: "Do you like to be a Network Developer?", answer : [{ key: "A" , value: "Yes" }, { key: "B" , value: "No" }, { key: "C" , value: "Maybe" }] },
    { id: 15, question: "Do you like to be a Security Engineer?", answer : [ { key: "A" , value: "Yes" }, { key: "B" , value: "No, thanks" } ] },
    { id: 16, question: "Do you like to be a Database Administration?", answer : [{ key: "A" , value: "Of course! I love it" }, { key: "B" , value: "No" }, { key: "C" , value: "Maybe" }] },

]; 