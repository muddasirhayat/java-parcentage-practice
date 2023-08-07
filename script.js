var names = prompt("Enter Your Name");
var mathsmarks = +prompt("Enter Your Maths marks");
var sindhimarks = +prompt("Enter Your sindhi marks");
var Urdumarks = +prompt("Enter Your Urdu marks");
var Englishmarks = +prompt("Enter Your English marks");
var studentsGivenMarks=(mathsmarks + sindhimarks + Urdumarks + Englishmarks );
var totalMarks=(500);
var percentage=(studentsGivenMarks / totalMarks *100 )
// document.write(names +" marks is " + studentsGivenMarks + " out of " + totalMarks + " and percentage is " +  percentage + " % " );
console.log(names +" marks is " + studentsGivenMarks + " out of " + totalMarks + " and percentage is " +  percentage + " % " );