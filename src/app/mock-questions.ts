import { Question } from "./question/question";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const QUESTIONS : Question[] = [

	{ id: 11, question: "This is Root Question contains 2 option answers", answer : [{ key: "A" , value: "I do like it" }, { key: "B" , value: "Nope.." }] },
    { id: 12, question: "This is 2nd question contains 2 option answers", answer : [{ key: "A" , value: "Yes" }, { key: "B" , value: "hm.. I'd rather not." }] },
    { id: 13, question: "This is 3rd question contains 2 option answers", answer : [{ key: "A" , value: "Sure, why not" }, { key: "B" , value: "No" }] },
    { id: 14, question: "This is 4th question contains 3 option answers", answer : [{ key: "A" , value: "Yes" }, { key: "B" , value: "No" }, { key: "C" , value: "Maybe" }] },
    { id: 15, question: "This is 5th question contains 2 option answers", answer : [{ key: "A" , value: "Yes" }, { key: "B" , value: "No, thanks" } ] },
    { id: 16, question: "This is 6th question contains 3 option answers", answer : [{ key: "A" , value: "Of course! I love it" }, { key: "B" , value: "No" }, { key: "C" , value: "Maybe" }] },
	{ id: 17, question: "This is 7th question contains 2 option answers", answer : [{ key: "A" , value: "Of course! I love it" }, { key: "B" , value: "No" } ]},
	{ id: 18, question: "This is the Last question contains 3 option answers", answer : [{ key: "A" , value: "Of course! I love it" }, { key: "B" , value: "No" }, { key: "C" , value: "Maybe" }] },
]; 