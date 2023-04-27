interface DirectorInterface {
    workFromHome() :string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;

}

interface TeacherInterface {
   workFromHome() :string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}


class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
     }
    getCoffeeBreak(): string {
            return 'Getting a coffee break';
        }
    workDirectorTasks(): string {
            return "Getting to director tasks"
        }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
     }
    getCoffeeBreak(): string {
            return 'Cannot have a break';
        }
    workTeacherTasks(): string {
            return "Getting to work"
        }
}

function createEmployee(salary:number|string):TeacherInterface|DirectorInterface{
    if (+salary < 500){
        return new Teacher()
    }
    else {
        return new Director()
    }
    
}

function isDirector(employee:any) : employee is Director {
    return employee instanceof Director
}

function executeWork(employee:any){
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks())
    }
    else if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks())
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));


type Subjects = "Math"|"History"

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return ("Teaching Math")
    }
    else if (todayClass === "History") {
        return ("Teaching History")
    }
}
