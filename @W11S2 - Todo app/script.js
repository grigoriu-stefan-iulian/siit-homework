class BaseElement {
    constructor(type) {
        this.element = document.createElement(type);
    }
}

class NameSection extends BaseElement {
    constructor(parent, name) {
        super("div");
        this.parent = parent;
        this.name = name;
    }
    render() {
        this.element.style.width = 90;
        this.element.style.display = 'inline-block';
        this.element.innerText = this.name;
        this.parent.appendChild(this.element);
    }
}

class DueDateSection extends BaseElement {
    constructor(parent, dueDate) {
        super("div");
        this.parent = parent;
        this.dueDate = dueDate;
    }
    render() {
        this.element.style.width = 90;
        this.element.style.display = 'inline-block';
        this.element.innerText = this.dueDate;
        this.parent.appendChild(this.element);
    }
}

class StatusSection extends BaseElement {
    constructor(parent, status, clickCb) {
        super("div");
        this.parent = parent;
        this.status = status;
        this.clickCb = clickCb;
    }
    render() {
        this.element.style.width = 20;
        this.element.style.display = 'inline-block';
        if (this.status) {
            this.element.removeAttribute('class')
            this.element.classList.add('fas')
            this.element.classList.add('fa-times')

        } else {
            this.element.removeAttribute('class')
            this.element.classList.add('fas')
            this.element.classList.add('fa-check')

        }
        this.element.onclick = (e) => {
            console.log(e)
            this.status = !this.status;
            this.clickCb();
        };
        this.parent.appendChild(this.element);
    }
}

class ToDoContainer extends BaseElement {
    constructor(parent, detailsContainer, name, description, dueDate, status) {
        super("div");
        this.detailsContainer = detailsContainer
        this.parent = parent;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.nameSection = new NameSection(this.element, this.name);
        this.dueDateSection = new DueDateSection(this.element, this.dueDate);
        this.statusSection = new StatusSection(this.element, this.status, () => {
            this.status = !this.status;
            this.parent.render();
        });
        this.element.onclick = () => {
            this.detailsContainer.show(this.name, this.description, this.dueDate)
        }
    }
    render() {
        if (this.status) {
            this.element.style.backgroundColor = 'green';
        } else {
            this.element.style.backgroundColor = 'red';
        }
        this.element.style.borderRadius = 2;
        this.element.style.padding = 5;
        this.element.style.margin = 5;
        this.nameSection.render();
        this.dueDateSection.render();
        this.statusSection.render();
        this.parent.element.appendChild(this.element);
    }
}

class ListContainer extends BaseElement {
    constructor(detailsContainer) {
        super("div");
        this.detailsContainer = detailsContainer
        this.todos = [];
        const storedTodos = localStorage.getItem('todos')

        if (storedTodos) {
            const myTodos = JSON.parse(storedTodos)
            myTodos.forEach((todo) => {
                this.push(todo.name, todo.description, todo.dueDate, todo.status)
            })
        }
    }
    render() {
        this.element.innerHtml = '';
        this.element.style.height = 500;
        this.element.style.width = 240;
        this.element.style.padding = 5;
        this.element.style.border = '1px solid black';
        this.element.style.overflowY = 'auto';
        this.todos.forEach(todoItem => todoItem.render());
        document.body.appendChild(this.element);
        this.storeTodos()
    }
    push(name, description, dueDate, status) {
        this.todos.push(new ToDoContainer(this, this.detailsContainer, name, description, dueDate, status));
        console.log(this.todos)
        this.render()
    }
    storeTodos() {
        let storedTodos = []
        this.todos.forEach((todo) => {
            const toDo = {
                name: todo.name,
                description: todo.description,
                status: todo.status,
                dueDate: todo.dueDate
            }
            storedTodos.push(toDo)
            localStorage.setItem('todos', JSON.stringify(storedTodos))
        })
    }
}

class Form {
    constructor(listContainer) {
        this.listContainer = listContainer;
        this.nameInput = new BaseElement('input')
        this.description = new BaseElement('textarea')
        this.dueDate = new BaseElement('input')
        this.dueDate.element.type = 'date'

        this.buttonSave = new BaseElement('button')
        this.buttonClear = new BaseElement('button')
        this.buttonSave.element.innerText = 'Save'
        this.buttonSave.element.onclick = () => {
            this.listContainer.push(
                this.nameInput.element.value,
                this.description.element.value,
                this.dueDate.element.value,
                true
            );
        }
        this.buttonClear.element.innerText = 'Clear'

        this.buttonClear.element.onclick = () => {
            this.nameInput.element.value = ''
            this.description.element.value = ''
            this.dueDate.element.value = ''
        }
        document.body.appendChild(this.nameInput.element)
        document.body.appendChild(this.description.element)
        document.body.appendChild(this.dueDate.element)
        document.body.appendChild(this.buttonSave.element)
        document.body.appendChild(this.buttonClear.element)
    }
}

class DetailsContainer {
    constructor() {
        this.toDo = new BaseElement('input')
        this.description = new BaseElement('textarea')
        this.dueDate = new BaseElement('input')
        this.dueDate.element.readOnly = true
    }
    render() {
        document.body.appendChild(this.toDo.element)
        document.body.appendChild(this.description.element)
        document.body.appendChild(this.dueDate.element)
    }
    show(toDo, description, dueDate) {
        this.toDo.element.value = toDo
        this.description.element.value = description
        this.dueDate.element.value = dueDate
    }
}

class System {
    constructor() {
        this.detailsContainer = new DetailsContainer();
        this.listContainer = new ListContainer(this.detailsContainer);
        this.form = new Form(this.listContainer);
        this.listContainer.render();
        this.detailsContainer.render()
    }
}

new System()