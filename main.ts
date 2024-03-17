// let isRaining: boolean = false;
// if (isRaining) {
    // console.log("ghar par rahein");
// } else {
    // console.log("barish enjoy karein");
// }
let physicsMarks: number = 80;
let chemistryMaks: number = 75;
let mathMarks: number = 90;
let totalMarks: number = 300;
let obtainedMarks: number = physicsMarks+chemistryMaks+mathMarks;
let percentage: number = (obtainedMarks/totalMarks)*100;
console.log("Marksheet:");
console.log("physics Marks:", physicsMarks);
console.log("chemistry Marks:", chemistryMaks);
console.log("math Marks:" , mathMarks);
console.log("total Marks:" , totalMarks);
console.log("percentage:" , percentage.toFixed(2)+ "%");
if (percentage >=80) {
    console.log("Grade A+");
} else if (percentage >=70) {
    console.log("Grade A");
} else if(percentage >=60) {
    console.log("Grade B");
} else if (percentage >=50) {
    console.log("Grade C");
} else {
    console.log("fail");
}