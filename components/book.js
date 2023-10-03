// main
const scriptURL =
'https://script.google.com/macros/s/AKfycbzfuoeUmPzYnIS3_J_eojZWp6mem39BQQiulerCtvo4DTpZQpx1dtod8EpPzvOs0GtWrw/exec'
const form = document.forms['book']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert(
            "Thanks for booking form we will reach you soon "))
        .catch(error => console.error('Error!', error.message))
})
