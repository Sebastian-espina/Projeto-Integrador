
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []


let publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || []

let hacker = null


function criarUsuario() {
    const input = document.getElementById('iusu')
    const nome = input.value

    if (nome === '') return

    usuarios.push({
        nome: nome,
        hackeado: false 
    })

    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    mostrarUsuarios()
    input.value = ''

    criarPost(nome)

}

function mostrarUsuarios() {
    const lista = document.getElementById('listadeusuarios')
    lista.innerHTML = ''

    usuarios.forEach(user => {
        const li = document.createElement('li')
        li.textContent = user.nome
        lista.appendChild(li)
    })
}

function criarPost(usuario) {
    const mensagens = [
        'Oí, eu sou novo por aqui',
        'Como vocês estão?',
        'testando essa plataforma',
        'Alguem mais aqui?'
    ]

    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)]

    publicaciones.push({
        usuario: usuario,
        texto: mensagemAleatoria,
        hackeado: false
    })

    localStorage.setItem('publicaciones', JSON.stringify(publicaciones))

    mostrarPosts()
}

function mostrarPosts(){
    const lista = document.getElementById('listaPosts')
    lista.innerHTML = ''

    publicaciones.forEach(post => {
        const li = document.createElement('li')
        li.textContent = post.usuario + ': ' + post.texto
        lista.appendChild(li)
    })
}

function escolherHacker(){
    if (usuarios.length === 0 ) return

    const index = Math.floor(Math.random() * usuarios.length)
    hacker = usuarios[index].nome 
    
    console.log('hacker elegido:', hacker) // solo para prueba
}

if (usuarios.length >= 3 && !hacker) {
    escolherHacker()
}

mostrarUsuarios()
mostrarPosts()