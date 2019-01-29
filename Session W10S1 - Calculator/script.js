//Create a container for the calculator
const container = document.createElement("div")
container.classList.add('container')
$('body').append(container)

//The Calculator class
class Calculator {
    constructor() {
        this.input = new Input()

        // Operations
        this.cButton = new Button('C', () => this.clearInput())
        this.delButton = new Button('<-', () => this.clearLastElement())
        this.equalButton = new Button('=', () => this.doOperation())
        this.ceButton = new Button('CE', () => this.deleteLastNumber())
        this.mathLogButton = new Button('Math.log', (text) => this.input.insertIntoInput(text))
        this.mathSqrtButton = new Button('Math.sqrt', (text) => this.input.insertIntoInput(text))
        this.openPharButton = new Button('(', (text) => this.input.insertIntoInput(text))
        this.closePharButton = new Button(')', (text) => this.input.insertIntoInput(text))
        this.dotButton = new Button('.', (text) => this.input.insertIntoInput(text))

        this.initialize = function () {
            this.input.render()
            this.cButton.render()
            this.ceButton.render()
            this.delButton.render()
            this.equalButton.render()
            this.mathLogButton.render()            
            this.mathSqrtButton.render()

            this.openPharButton.render()
            this.closePharButton.render()
            this.dotButton.render()
            const arryButtons = ['+', '-', '*', '/']

            for (let j = 0; j < arryButtons.length; j++) {
                this.operatorButton = new Button(arryButtons[j], (text) => this.input.insertIntoInput(text))
                this.operatorButton.render()
            }

            for (let i = 0; i <= 9; i++) {
                this.oneButton = new Button(i, (text) => this.input.insertIntoInput(text))
                this.oneButton.render()
            }
        }
    }
    clearInput() {
        this.input.element.value = ''
    }
    clearElement() {
        this.input.element.value = ''
    }
    clearLastElement() {
        this.input.element.value = this.input.element.value.slice(0, -1)
    }
    doOperation() {
        try {
            return this.input.element.value = eval(this.input.element.value)
        } catch (e) {
            return this.input.element.value = 'Unable to calculate'
        }
    }
    deleteLastNumber() {

        try {
            const splited = this.input.element.value.match(/(\d+$)/)[0]
            const myValue = this.input.element.value.length
            return this.input.element.value = this.input.element.value.slice(0, myValue - splited.length)
        } catch (e) {
            return console.log('Unable to do')
        }
    }
}

class Element {
    constructor() {
        this.createTheElement = function (tag) {
            this.element = document.createElement(tag)
            container.append(this.element)
        }
    }
}

class Input extends Element {
    constructor() {
        super()
        this.render = function () {
            this.createTheElement('input')
            this.element.setAttribute('type', 'text')
        }
        this.insertIntoInput = function (text) {
            this.element.value = this.element.value + text
        }
    }
}

class Button extends Element {
    constructor(text, onClickCb) {
        super()
        this.text = text
        this.onClickCb = onClickCb
        this.render = () => {
            this.createTheElement('button')
            this.element.innerText = text
            this.element.id = `button${text}`
            this.element.onclick = () => this.onClickCb(this.text)
        }
    }
}

// Creating an instance of Calculator class
const myCalculator = new Calculator()
myCalculator.initialize()