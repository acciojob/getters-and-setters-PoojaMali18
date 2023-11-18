//complete this code
class Person {
	constructor details(name,age)
	{
		this.name = name;
		this.age=age;
	}
}

class Student extends Person {
	constructor study()
	{
		super(name,age);
		console.log(name +"is studying")
	}
	
}

class Teacher extends Person {
	constructor teach()
	{
		super(name,age);
		console.log(name +"is taeching")
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
