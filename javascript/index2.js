let obj = {
    name: "Vasya",
    age: 99,
}

// let student = {
//     name: "Vasya",
//     age: 99,
// }

// let petrovich = {...student, name : "Petrovich", age : 100}
// console.log(Object.entries(petrovich))

// console.log(obj.name)
// console.log(obj.age)


// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

const addField = (Object, key, value) => {
    let obj = {
        ...Object,
        [key]: value
    }
    return obj
}
console.log(addField(obj, 'city', "Bishkek"))

const sum = (...args) => {
    return [...args]
}
console.log(sum(1,2,23, 'asdd'));
