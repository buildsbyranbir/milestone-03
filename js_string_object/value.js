const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true
}
person.salary = 30000;
person['age'] = 26;
console.log(person)


const proName = 'profession';
person[proName] = 'WebDev'
console.log(person)