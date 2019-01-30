'strict mode'

const getId = uuidv4()

// Function to create a cell for table
const createCell = (value) => {
    var cell = document.createElement("td")
    $(cell).html(value)
    return cell
}

//Function to create a row with cells
const createRow = (cell1, cell2, cell3, cell4, cell5, cell6) => {
    const row = $('<tr></tr>')
    row.attr('id', getId)
    row.append(cell1)
    row.append(cell2)
    row.append(cell3)
    row.append(cell4)
    row.append(cell5)
    row.append(cell6)

    return row
}

// Function to create a button inside a cell
const createEditButtonInCell = (text, cb) => {
    const cell = $('<td></td>')
    const button = $('<button></button>')
    button.addClass('editButton')
    button.html(text)
    button.on('click', cb);
    $(cell).append(button)
    return cell;
}

const createDeleteButtonInCell = (text, cb) => {
    const cell = $('<td></td>')
    const button = $('<button></button>')
    button.addClass('deleteButton')
    button.html(text)
    button.on('click', cb);
    $(cell).append(button)
    return cell;
}

// Creating form
const createForm = (element) => {
    const form = $('<form></form>')
    form.addClass('myForm')
    //
    const labelNo = $('<label>No. </label>')
    const myInput = $('<input>')
    myInput.val(element.id)
    labelNo.append(myInput)
    form.append(labelNo)

    form.append('<br>')

    const labelPost = $('<label>Post </label>')
    const textArea1 = $('<textarea placeholder="Insert text">')
    textArea1.html(element.body)
    labelPost.append(textArea1)
    form.append(labelPost)

    form.append('<br>')

    const labelComment = $('<label>Comment </label>')
    const textArea2 = $('<textarea placeholder="Insert text">')
    textArea2.html(element.title)
    labelComment.append(textArea2)
    form.append(labelComment)

    form.append('<br>')

    const labelUserId = $('<label>User Id </label>')
    const userId = $('<input placeholder="User Id">')
    userId.val(element.userId)
    labelUserId.append(userId)
    form.append(labelUserId)

    form.append('<br>')

    const saveButton = $('<button>Save</button>')

    saveButton.on('click', function (e) {
       e.preventDefault()
      // const mything = 
        $(this).closest('tr').closest('td').html('works')
    })

    form.append(saveButton)

    return form
}

// Edit button wiring
const editButton = (element) => {
    $('.myForm').remove()
    $('.container').append(createForm(element))
}

// Delete button wiring
const deleteButton = () => {
    // alert('Delete')
    $('.tg').on('click', '.deleteButton', function () {
        $(this).closest('tr').remove()
    })
    //console.log(myId)

}