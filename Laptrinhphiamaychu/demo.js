const sendButton = document.getElementById('send')
const resetButton = document.getElementById('reset')
const form = document.getElementById('form')

const ten = document.getElementById('ten')
const email = document.getElementById('email')
const thongdiep = document.getElementById('message')

function reload() {
    ten.value = localStorage.getItem('name')
    email.value = localStorage.getItem('email')
    thongdiep.value = localStorage.getItem('messge')
}
reload()

form.addEventListener('submit', function (e) {
    e.preventDefault()
})

resetButton.addEventListener('click', function (){
    ten.value = ''
    email.value = ''
    thongdiep.value = ''
})

sendButton.addEventListener('click', function() {
    alert('send')
    localStorage.setItem('ten', ten.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('message', thongdiep.value)
})
