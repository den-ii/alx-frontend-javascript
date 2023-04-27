interface Teacher {
    readonly firstname: string;
    readonly lastname: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberofReports: number
}

function printTeacher(firstName:string, lastName: string): string {
    return firstName.charAt(0) + "." + " " + "Doe";
}

interface printTeacherFunction {
    (firstName:string, lastName:string) : string
}
interface IStudent {
    firstName: string;
    lastName: string;
    displayName(): string;
    workOnHomework(): string;
  }
  
  interface IStudentConstructor {
    new(firstName: string, lastName: string): IStudent;
  }

class StudentClass implements IStudent {
    firstName: string
    lastName: string
    constructor(firstName:string, lastName: string) {
        this.firstName = firstName;
        this.lastName 
    }
    
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName
    }

}

// The class has a method named displayName. It returns the firstName of the student
// The constructor of the class should be described through an Interface
// The class should be described through an Interface
// Requirements:

// You can reuse the Webpack configuration from the previous exercise to compile the code.
// When running npm run build, no TypeScript error should be displayed.
// Every variable should use TypeScript when possib
