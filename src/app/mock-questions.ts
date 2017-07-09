import { Question } from "./selection/selection";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const QUESTIONS : Question[] = [

	{ id: 11, question: "Do you like to be a Software Developer?", answer : [{ A: "Yes" }, { B: "No" }] },
    { id: 12, question: "Do you like to be a System Engineer?", answer : [{ A: "Yes" }, { B: "No" }] },
    { id: 13, question: "Do you like to be a Validation Engineer?", answer : [{ A: "Yes" }, { B: "No" }] },
    { id: 14, question: "Do you like to be a Network Developer?", answer : [{ A: "Yes" }, { B: "No" }] },
    { id: 15, question: "Do you like to be a Security Engineer?", answer : [{ A: "Yes" }, { B: "No" }] },
    { id: 16, question: "Do you like to be a Database Administration?", answer : [{ A: "Yes" }, { B: "No" }] }

/*
      { id: 11, question: "Do you like to be a Software Developer?", A: "Yes", B: "No", C: "SO SO", D: "Not Sure"},
      { id: 12, question: "Do you like to be a System Engineer?", A: "Yes", B: "No", C: "SO SO", D: "Not Sure"},
      { id: 13, question: "Do you like to be a Validation Engineer?", A: "Yes", B: "No", C: "SO SO", D: "Not Sure"},
      { id: 14, question: "Do you like to be a Network Developer?", A: "Yes", B: "No", C: "SO SO", D: "Not Sure"},
      { id: 15, question: "Do you like to be a Security Engineer?", A: "Yes", B: "No", C: "SO SO", D: "Not Sure"},
      { id: 16, question: "Do you like to be a Database Administration?", A: "Yes", B: "No", C: "SO SO", D: "Not Sure"}
 */
]; 