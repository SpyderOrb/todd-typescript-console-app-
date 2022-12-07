"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true),
];
let collection = new todoCollection_1.TodoCollection("Alex", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
// console.log(JSON.stringify(todoItem));
// todoItem.printDetails();
// collection.addTodo(todoItem);
collection.getTodoItems(true).forEach((item) => item.printDetails());
console.log(`${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete} items to do)` +
    `\n (${collection.getItemCounts().total} all items)`);
collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
