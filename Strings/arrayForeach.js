const num = [1,2,3,4,5];
const fruits = ['Orange', "Banana"]
const clients = [
    {id: 1, name: 'Rayam'},
    {id: 2, name: 'Náthaly'}
]

num.forEach((value, index, array) => {
    console.log('value', array)
})

fruits.forEach((value, index, array) => {
    console.log('value', array)
})

clients.forEach((value, index, array) => {
    console.log(value.name)
})