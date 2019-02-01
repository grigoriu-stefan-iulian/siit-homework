const enUs = document.getElementById('en-us')
const roRo = document.getElementById('ro-ro')
const selectLanguage = () => {
    if (localStorage.getItem('language') === 'en-US') {
        enUs.checked = true
    } else {
        roRo.checked = true
    }
}

if (localStorage.getItem('language') === null) {
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

// allCookies = document.cookie;
//document.cookie = newCookie; (id: 'value')