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
        return `${this.name} has begun sprint challenge on  ${subject}`
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