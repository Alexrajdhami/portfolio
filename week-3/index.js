function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + ", your monthly salary is " + Salary);
}

console.log("This is my first program");

var EmpName = "Alex";
var EmpSalary = 5000;

EmployeeInfo(EmpName, EmpSalary);

const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
};
EmpSkills("Java");

const student = require('./StudentInfo');
const Person = require('./person'); // Corrected import

// getName is the function so we use ()
console.log("Student Name: " + student.getName());
console.log("Location: " + student.Location());
console.log("DOB: " + student.dob); 
// dob is a variable, so no ()
console.log("Student grade: " + student.Studentgrade());
console.log("Grade is " + student.Studentgrade(55));

// Correct instantiation
let Person1 = new Person("Manoj", "Nepal", "myemail@gmail.com");
console.log("Using Person Module", Person1.getPersonInfo());

console.log("Program ended");

// Import core modules
const os = require("os");
const util = require("util");

// Display various system properties
console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + " Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + (os.totalmem() / 1e9).toFixed(2) + " GB");
console.log("Free Memory: " + (os.freemem() / 1e9).toFixed(2) + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
console.log("Program End");
