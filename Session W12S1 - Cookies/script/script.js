const enUs = document.getElementById('en-us')
const roRo = document.getElementById('ro-ro')
const selectLanguage = () => {
    if (localStorage.getItem('language') === 'en-US') {
        enUs.checked = true
    } else {
        roRo.checked = true
    }
}

if (localStorage.length === 0) {
    localStorage.setItem('language', 'en-US')
}

enUs.addEventListener('click', () => {
    localStorage.removeItem('language')
    localStorage.setItem('language', 'en-US')
})

roRo.addEventListener('click', () => {
    localStorage.removeItem('language')
    localStorage.setItem('language', 'ro-RO')
})

selectLanguage()

// ++ use geolocation api and use that to get 
// the city and find weather information for the city


// super() apeleaza constructorul din clasa de baza
