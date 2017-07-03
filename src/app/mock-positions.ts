import { Position } from "./position-detail/position";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const POSITIONS : Position[] = [
      { id: 11, name: "Software Developer"},
      { id: 12, name: "System Engineer"},
      { id: 13, name: "Validation Engineer"},
      { id: 14, name: "Network Developer"},
      { id: 15, name: "Security Engineer"},
      { id: 16, name: "Database Administration"}
]; 