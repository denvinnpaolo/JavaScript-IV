// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.name=props.name;
        this.age=props.age;
        this.location=props.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.speciality=props.speciality;
        this.favLanguage=props.favLanguage;
        this.catchPhrase=props.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    };
}

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground=props.previousBackground;
        this.className=props.className;
        this.favSubjects=props.favSubjects;
    }

    listsSubjects(){
        return `My favorite subjects are 1.${this.favSubjects[0]} 2.${this.favSubjects[1]} and 3.${this.favSubjects[2]}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    };

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    };
}
class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName=props.gradClassName;
        this.favInstructpr=props.favInstructpr;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    };

}

const CamPope = new Instructor({
    name: 'Cameron Pope',
    age: 35,
    location: 'Lambda HQ',
    catchPhrase: 'WEBPT7 is the best',
    favLanguage: 'CSS',
    speciality: 'Awesomeness'

});

const JoshKnell = new Instructor({
    name: 'Joshua Knell',
    age: 37,
    location: 'Lambda HQ VIP Suite',
    catchPhrase: 'WEBPT7 is the bestest',
    favLanguage: 'Javascript',
    speciality: 'Radness'

});

const DenvinnMagsino = new Student({
    name: 'Denvinn Magsino',
    age: 24,
    location: 'Valley Glen',
    favSubjects: ['HTML', 'CSS', 'JS'],
    className: 'WEBPT7',
    previousBackground: "A server who wanted to go to school for nursing"

});

const DavinaTaylor = new ProjectManagers({
    name: 'Davina Taylor',
    age: 25,
    location: 'Lambda town',
    gradClassName: 'CS101',
    favInstructpr: 'Dan Frehner'

});

console.log(CamPope);
console.log(CamPope.speak());
console.log(JoshKnell);
console.log(JoshKnell.speak());
console.log(DenvinnMagsino);
console.log(DenvinnMagsino.listsSubjects());
console.log(DenvinnMagsino.PRAssignment('JS-IV'));
console.log(DenvinnMagsino.sprintChallenge('Javascript-IV'));
console.log(DavinaTaylor);
console.log(DavinaTaylor.standUp('WEBPT7'));
console.log(DavinaTaylor.debugsCode(DenvinnMagsino, 'Javascript'));