
const myBody = $('body')
const myDiv = $('<div id="myDiv"></div>')

myBody.append(myDiv)

myDiv.append('<h1>To Do</h1>')
const labelName = $('<label>Name</label>')
const inputName = $('<input placeholder="Insert To Do">')
const labelDescription = $('<label>Description</label>')
const textareaDescription = $('<textarea placeholder="Insert To Do description"></textarea>')
const labelDate = $('<label>Date</label>')
const inputDate = $('<input type="date">')
const myButton = (buttonName, onClick) => {
    const button = $(`<button>${buttonName}</button>`)
    button.on('click', onClick)
    myDiv.append(button)
}

const cancelForm = () => {
    inputName.val('')
    textareaDescription.val('')
    inputDate.val('')

}
const saveForm = () => {
    console.log('hello')
}

labelName.append(inputName)
labelDescription.append(textareaDescription)
labelDate.append(inputDate)


myDiv.append(labelName)
myDiv.append(labelDescription)
myDiv.append(labelDate)
myButton('Cancel', cancelForm)
myButton('Save', saveForm)
