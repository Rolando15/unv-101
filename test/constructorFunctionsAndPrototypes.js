// function Person(name, job, yearOfBirth){
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }
// Person.prototype.calculateAge= function(){
//     console.log("The current age is:" + (2022 - this.yearOfBirth));
// }
// let Person1 = new Person("John", "Nurse", 2002);
// console.log(Person1);
// Person1.calculateAge(); 



// Make Employee Array:
function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.job = jobTitle;
    this.salary = salary;
    this.status = status;
}
Employee.prototype.printEmployeeForm= function(){
    console.log(this.name, this.job, this.salary, this.status);

}

 let Employee1 = new Employee("Luis", "Nurse", 50000, "Full Time");
 let Employee2 = new Employee("Carlos", "Construction", 60000, "Full Time");
 let Employee3 = new Employee("Jerry", "Graphic Designer", 70000, "Part Time");
    
 Employee1.printEmployeeForm();
 Employee2.printEmployeeForm();
 Employee3.printEmployeeForm();

 // call employee array into string