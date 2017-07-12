import { Position } from "./position-detail/position";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const POSITIONS : Position[] = [
      { id: 11, name: "Software Engineer", intro: "this should display the short intro for Software Engineer position", detail : "this should display the detail of Software Engineer position"},
      { id: 12, name: "UI/ UX designer", intro: "this should display the short intro for UI/ UX designer position", detail : "this should display the detail of UI/ UX designer position"},
      { id: 13, name: "Testing / QA engineer", intro: "this should display the short intro for Testing / QA engineer position", detail : "this should display the detail of Testing / QA engineer position"},
      { id: 14, name: "Data Analyst /Scientist", intro: "this should display the short intro for Data Analyst /Scientist position", detail : "this should display the detail of Data Analyst /Scientist position"},
      { id: 15, name: "Network Security Engineer", intro: "this should display the short intro for Network Security Engineer position", detail : "this should display the detail of Network Security Engineer position"},
      { id: 16, name: "Project Manager", intro: "this should display the short intro for Project Manager position", detail : "this should display the detail of Project Manager position"},
      { id: 17, name: "Project Architect", intro: "this should display the short intro for Project Architect position", detail : "this should display the detail of Project Architect position"},
      { id: 18, name: "Hardware Engineer", intro: "this should display the short intro for Hardware Engineer position", detail : "this should display the detail of Hardware Engineer position"},
]; 


