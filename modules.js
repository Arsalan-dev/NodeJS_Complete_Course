
const  xyz  = require('./people')


console.log(xyz.people)
console.log(xyz.jobs)

// OR use destructuring

const { people, jobs } = require('./people')

console.log(people)
console.log(jobs)