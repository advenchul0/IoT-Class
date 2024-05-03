function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Student(name, gender, school) {
    Person.call(this, gender, school);
    this.school = school;
}

function Empolyee(name, gender, company) {
    Person.apply(this, [gender, gender]);
    this.company = company;
}

var by = new Student('보영', 'female', '단국대') // Student {name: 'female', gender: '단국대', school: '단국대'}
var jn = new Empolyee('재난', 'male', '구골') // Empolyee {name: 'male', gender: 'male', company: '구골'}


