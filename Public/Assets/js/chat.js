console.log('chat.js')

const socket = io()
let user
let chatbox = document.querySelector('#chatbox') //traemos lo que tiene le imput

Swal.fire({
    title: 'Identifícate',
    input: 'text',
    text: 'Ingrese el usuario para identificarse en el chat',
    inputValidator: value => { //colback ingresa solo el parametro
        return !value && '¡Necesitas escribir un nombre de usuario para continuar!'
    },
    allowOutsideClick: false 
}).then(result => {
    user = result.value
    // result trae le valor de Value
})

chatbox.addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        if (chatbox.value.trim().length > 0) {
            socket.emit('message', { user, message: chatbox.value })
            chatbox.value = ''
        }
    }
})

socket.on('messageLogs', data => {
    // aca sucede el chat entre usuarios
    let log = document.querySelector('#messageLogs')//atrapo el array de lo smensajes
    let messages = ''
    data.forEach( message => {
          messages = messages + `${message.user} dice: ${message.message}<br>`
    })
    log.innerHTML = messages
})