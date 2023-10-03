// index


const scriptURL =
'https://script.google.com/macros/s/AKfycbw3axuaiKH7mV-NxFXUXicOFw7k-KjY_N7BJo99WNy7ZBOLo8cIy52hFN2paJCSRbUOSw/exec'
const form = document.forms['submit-googlesheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert(
            "Thanks for contact we will reach you ASAP!!"))
        .catch(error => console.error('Error!', error.message))
})

