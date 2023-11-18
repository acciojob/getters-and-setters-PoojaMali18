class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return this.name;
  }

  set age(newAge) {
    this.age = newAge;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Test cases
const student = new Student('Alice', 20);
student.study(); // Output: Alice is studying

const teacher = new Teacher('Mr. Smith', 35);
teacher.teach(); // Output: Mr. Smith is teaching

// Exporting the classes
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
