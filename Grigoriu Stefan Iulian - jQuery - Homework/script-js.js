//Function to create elements
const createElement = function (value, append) {
    const create = document.createElement(value)
    append.appendChild(create)
    return create
}

//Form creation
const form = document.createElement('form')
document.querySelector('body').appendChild(form)
form.setAttribute('id', 'myForm')

const fName = createElement('input', form)
fName.setAttribute('placeholder', 'First Name')
fName.setAttribute('class', 'input-names')
fName.setAttribute('name', 'firstName')

createElement('br', form)
createElement('br', form)

const lName = createElement('input', form)
lName.setAttribute('placeholder', 'Last Name')
lName.setAttribute('class', 'input-names')
lName.setAttribute('name', 'lastName')


//Creating confirmation Message
const confirmationMessage = document.createElement('p')
confirmationMessage.setAttribute('class', 'confirmation-para')

// 'check' - font-awesome icon
const iCheck = createElement('i', confirmationMessage)
iCheck.setAttribute('class', 'fas fa-check-circle')

//validation message 
const confirmFirstName = createElement('span', confirmationMessage)

//Creating 'x' button   
const closeAnchor = createElement('a', confirmationMessage)
closeAnchor.setAttribute('onclick', `hideValidationMessage()`)
closeAnchor.setAttribute('href', `#`)

// 'x' - font-awesome icon 
const iClose = createElement('i', closeAnchor)
iClose.setAttribute('class', 'fas fa-times')
confirmationMessage.insertBefore(confirmFirstName, closeAnchor)

//Gender select
const para = createElement('p', form)
para.setAttribute('style', 'margin-bottom: 0')
para.textContent = 'Gender'

const genderM = createElement('input', form)
genderM.setAttribute('type', 'radio')
genderM.setAttribute('name', 'gender')
genderM.setAttribute('class', 'gender-select')
createElement('span', form).textContent = 'M'
createElement('br', form)

const genderF = createElement('input', form)
genderF.setAttribute('type', 'radio')
genderF.setAttribute('name', 'gender')
genderF.setAttribute('class', 'gender-select')


genderF.setAttribute('class', 'gender-select')
createElement('span', form).textContent = 'F'
createElement('br', form)

//Text area
const textArea = createElement('textarea', form)
textArea.setAttribute('placeholder', 'Your message here...')
textArea.setAttribute('style', 'border: 1px solid black;')
textArea.setAttribute('rows', '7')
textArea.setAttribute('cols', '41')
textArea.setAttribute('name', 'textArea')

createElement('br', form)

// Form Image
const button = createElement('button', form)
button.textContent = 'Submit'
button.setAttribute('id', 'submit-button')
const image = createElement('img', form)
image.setAttribute('src', 'https://via.placeholder.com/265x310')
image.setAttribute('class', 'form-image')

//Form validation
const formValidation = function () {
    document.querySelector('#myForm').addEventListener('submit', function (e) {
        
        e.preventDefault()
        
        if (fName.value !== '') {
            fName.setAttribute('class', 'valid-input')
        } else {
            fName.setAttribute('class', 'invalid-input')
        }

        fName.addEventListener('input', function (e) {
            if (e.target.value !== '') {
                fName.setAttribute('class', 'valid-input')
            } else {
                fName.setAttribute('class', 'invalid-input')
            }
        })

        if (lName.value !== '') {
            lName.setAttribute('class', 'valid-input')
        } else {
            lName.setAttribute('class', 'invalid-input')
        }

        lName.addEventListener('input', function (e) {
            if (e.target.value !== '') {
                lName.setAttribute('class', 'valid-input')

            } else {
                lName.setAttribute('class', 'invalid-input')
            }
        })

        if (textArea.value !== '') {
            textArea.setAttribute('style', 'border: 2px solid green;')
        } else {
            textArea.setAttribute('style', 'border: 2px solid red;')
        }

        textArea.addEventListener('input', function (e) {
            if (e.target.value !== '') {
                textArea.setAttribute('style', 'border: 2px solid green;')

            } else {
                textArea.setAttribute('style', 'border: 2px solid red;')
            }
        })

        if (fName.value !== '' && lName.value !== '' && textArea.value !== '') {
            confirmFirstName.textContent = `Thank you for contacting us, ${fName.value}`
            document.querySelector('body').insertBefore(confirmationMessage, form)

            //Log input fields
            console.log(`First Name: ${fName.value}`)
            console.log(`Last Name: ${lName.value}`)
            console.log(`Message: ${textArea.value}`)

            // Remove inserted data
            e.target.elements.firstName.value = ''
            e.target.elements.lastName.value = ''
            e.target.elements.textArea.value = ''
            e.target.elements.gender[0].checked = false
            e.target.elements.gender[1].checked = false
        }
    })
}

formValidation()

// Hide Validation Message
function hideValidationMessage() {
    confirmationMessage.setAttribute('class', 'hide-para')
}

