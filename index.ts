// // function with if else elif

import * as promptSync from "prompt-sync";
function calculateGrade(marks: number,):string
{
if (marks >= 90){
    return "grade: A+";
}
    else if (marks >=75){
        return "grade: A";
    }
    else if (marks >=65){
        return "grade: B";
    }
    else if (marks>= 50){
        return "grade: C";
    }
    else if (marks >=33){
        return "grade: D";
    }
    else (marks <=33);{
        return"fail";
    }}

    const prompt = promptSync();
    console.log("\twellcome student\t".toLocaleUpperCase());

    let student_1 = prompt("please enter your marks: ")
    let student1 = parseInt(student_1)
    let student_2 = prompt("please enter your marks: ")
    let student2 = parseInt(student_2)

    console.log(`student 1 Marks ${student1}, ${calculateGrade(student1)}`)
    console.log(`student 2 Marks ${student2}, ${calculateGrade(student2)}`)