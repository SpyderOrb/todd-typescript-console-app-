"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    /* public id: number;
    public task: string;
    public complete: boolean = false;
  
    public constructor(id: number, task: string, complete: boolean = false) {
      this.id = id;
      this.task = task;
      this.complete = complete;
    }
  
     public printDetails(): void {
       console.log(
         `${this.id}\t${this.task}${this.complete ? "\t(complete)" : ""}`
       );
     }
    */
    // The concise syntax used for the constructor allows class to receive
    // parameters and create instance properties in a single step
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    // Remove public control keyword, because Typescript assumes that all
    // methods and propperties are public unless another access level is used.
    printDetails() {
        console.log(`${this.id})   ${this.task}${this.complete ? "   (complete)" : " - "}`);
    }
}
exports.TodoItem = TodoItem;
