'strict mode'

let table = $("#table")

// Root url for API
const root = 'https://jsonplaceholder.typicode.com/posts'

// Create table and populate
const createTable = () => {
   $.ajax({
      url: root,
      method: 'GET',
      success(response) {
         console.log(response)
         response.forEach((element) => {
            table.append(createRow(createCell(element.id), createCell(element.body), createCell(element.title), createCell(element.userId), createEditButtonInCell('Edit', () => editButton(element)), createDeleteButtonInCell('Delete', () => deleteButton())))
         })
      },
      error() {
         throw Error(alert('ERROR: Cannot get data from the API!'))
      }
   })
}

createTable()
