
/*
const root = 'https://jsonplaceholder.typicode.com'

fetch(root + '/posts/1', { method: 'GET' }).then((response) => response.json).then((jsonResponse) => console.log(jsonResponse))

//POST
fetch(root + '/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}).then((response) => response.json()
).then((jsonResponse) => console.log(jsonResponse))

//PUT
fetch(
    root + '/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    }).then((response) => response.json()
    ).then((jsonResponse) => console.log(jsonResponse))

//DELETE
fetch(root + '/posts/1', {
    method: 'DELETE',
}).then((response) => response.json()
).then((jsonResponse) => console.log(jsonResponse))

//Verify if response is successful
fetch(root + '/posts/1').then((response) => {
    if (response.ok) {
        return response.json()
    }
    throw new Error('Response was not OK')
}).then(
    (jsonResponse) => console.log(jsonResponse)
).catch(
    (error) => console.log(error)
    )

*/

/*
const user = {
    name: 'John Doe',
    age: 25,
    height: 150,
    weight: 75,
    sayHi() { console.log('Hi')
},
    calculateBMI() {
       return this.height / this.weight
    }
}

console.log(user.sayHi())
console.log(user.calculateBMI())


const createNewUser = (options) => {
    var user = {}
    user.name = options.name,
    user.age = options.age
}
const user1 = createNewUser({
    name: 'joghDoe',
    age: 24
})


const User = (options) => {
    user.name = options.name,
    user.age = options.age
}
const user2 = User( {
    name: 'joghDoe',
    age: 24
})
*/



function Calculator() {

    this.getValueFromInput = (id) => {
        return $(id).val();
    }

    this.setValueToInput = (value, input) => {
        $(input).val(value)
    }

    this.getSumResult = () => {
        const num1 =  this.getValueFromInput('#input1');
        const num2 =  this.getValueFromInput('#input2');
        return + num1 + (+ num2)
    }
   
    this.addInputNumbers = () => {
        this.setValueToInput(this.getSumResult(), '#result')
    }
}

const myCalculator = new Calculator()
$('#myButton').on('click', (e) => {
    myCalculator.addInputNumbers()
})

// +num1 -> number 