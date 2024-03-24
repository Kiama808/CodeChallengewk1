//We are developing a code that will output the grades of students from their marks
//First we have to ensure that the marks entered are between 0 to 100
function MarksBoundary(marks) {
  if (marks >= 0 && marks <= 100) {
    return StudentsGrade(marks);
  } else {
    return "Invalid Marks";
  }
}
//Now we introduce the if statements that will be used to output the grades

function StudentsGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 50 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else {
    return "E";
  }
}
//The above nested if function will return the said grades
//Since it obeys the laws of scope, the studentgrade  function will apply the marksboundary function
console.log(MarksBoundary(39));
//I have kept marks in the console log to show that one needs to input a mark so that  the grade can be allocated.
//THANK YOU!
