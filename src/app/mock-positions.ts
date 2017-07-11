import { Position } from "./position-detail/position";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const POSITIONS : Position[] = [
      { id: 11, name: "Software Engineer"},
      { id: 12, name: "System Engineer"},
      { id: 13, name: "Test Engineer"},
      { id: 14, name: "Data analytics"},
      { id: 15, name: "Security Engineer"},
      { id: 16, name: "Database Administration"}
]; 