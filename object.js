let student ={
    name:"shourya",
    classs : "Btech",
    course : {
        Stream : "CSE",
        year : "4th",
        rank: 1

    },
    contact:9919334999 
}
let ps="name";
student.marks=100;
console.log(student.xyz);

//
for(let s in student)
{
    console.log(s+" "+student[s]);
}
delete student.marks;
console.log(student);