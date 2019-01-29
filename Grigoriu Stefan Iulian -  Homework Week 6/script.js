const root = 'https://api.chucknorris.io/jokes/random'
$.ajax({
    url: root,
    method: 'GET',
    success(response) {
        $('#chuck-norris-joke').html(response.value)
        $('#chuck-norris-image').attr('src', response.icon_url)

    },
    error() {
        throw new Error($('#chuck-norris-joke').html('Error: Unable to gather data.'))
    }
})