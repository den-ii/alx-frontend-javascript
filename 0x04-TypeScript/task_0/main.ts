interface Students {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}
const student1:Students = {
    firstname: 'John',
    lastname: 'Snow',
    age: 30,
    location: 'Winterfell'
}
const student2:Students = {
    firstname: 'Peter',
    lastname: 'Packer',
    age: 20,
    location: 'Queens'
}

const studentsList: Array<Students> = [student1, student2] 
const body = document.querySelector('body')
const table = document.createElement('table')
studentsList.forEach(student => {
    const row = document.createElement('tr')
    const column1 = document.createElement('td')
    const column2 = document.createElement('td')
    column1.innerText = student.firstname
    column2.innerText = student.location

    row.appendChild(column1)
    row.appendChild(column2)

    table.appendChild(row)
})