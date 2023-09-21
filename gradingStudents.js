// function gradingStudents(grades) {

// to define grade from array of grades

function gradingStudents(grades) {
    // Write your code here

function findNextMultiple5(grade) {
    let nextMultiple5 = grade;
    while (nextMultiple5 % 5 !== 0) {
        nextMultiple5++;
    }
    return nextMultiple5;
}

function finalGrade(grade) {
    if (grade < 38) {
        return grade;
    } else if (grade >= 38 && grade % 5 > 2) {
        return findNextMultiple5(grade);
    } else {
        return grade;
    }
}

 finalGrade(33);


    
for (let i=0; i<grades.length; i++){
    console.log(finalGrade(grades[i]));
}

}


gradingStudents([73,67,38,33]); // 75,67,40,33

// ====================================================================================================
// Solution in Javascript, using Array.prototype.map()

// function gradingStudents(grades) {
//   // Write your code here
//   const getRounder = grade => 5 - (grade % 5)
//   return grades.map(grade => ((grade >= 38) && getRounder(grade) < 3) ?  grade + getRounder(grade) : grade)
// }