"use strict";
// // function with if else elif
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
function calculateGrade(marks) {
    if (marks >= 90) {
        return "grade: A+";
    }
    else if (marks >= 75) {
        return "grade: A";
    }
    else if (marks >= 65) {
        return "grade: B";
    }
    else if (marks >= 50) {
        return "grade: C";
    }
    else if (marks >= 33) {
        return "grade: D";
    }
    else
        (marks <= 33);
    {
        return "fail";
    }
}
var prompt = promptSync();
console.log("\twellcome student\t".toLocaleUpperCase());
var student_1 = prompt("please enter your marks: ");
var student1 = parseInt(student_1);
var student_2 = prompt("please enter your marks: ");
var student2 = parseInt(student_2);
console.log("student 1 Marks ".concat(student1, ", ").concat(calculateGrade(student1)));
console.log("student 2 Marks ".concat(student2, ", ").concat(calculateGrade(student2)));
