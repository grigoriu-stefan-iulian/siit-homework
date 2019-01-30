const root = 'https://jsonplaceholder.typicode.com/posts'

const displayPosts = () => new Promise((resolve, reject) => {
    $.ajax({
        url: root,
        method: 'GET',
        success(response) {
            resolve(response)
        },
        error() {
            throw new Error('Can not get data from API.')
        }
    })
})

const displayComments = () => new Promise((resolve, reject) => {
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/1/comments`,
        method: 'GET',
        success(comments) {
            resolve(comments)
            // for (let j = 0; j < 5; j++) {
            //     $('body').append('<br>')
            //     $('body').append('<br>')
            //     document.write(JSON.stringify(comments[j]))
           // }
        },
        error() {
            throw new Error('Can not get data from API.')
        }
    })
})

displayPosts().then((response) => {
    //displayComments(data)
    console.log(response)
    
    for (let i = 0; i < 10; i++) {
        $('body').append('<br>')
        $('body').append('<br>')
        document.write(JSON.stringify(response[i]))
        console.log(displayComments())
        
    }
}).catch((err) => {
    console.log(err)
})

/*
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 1000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promised data: ${data}`)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})
*/

/*
jQuery.get('/posts', (posts) => {
    for (let i = 0; i < posts.length; i++) {
        jQuery.get(`/posts/${post[i].id}/comments`, (comments) => {

        })
    }
})
*/

