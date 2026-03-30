
let usuarios = []
 
const dados = localStorage.getItem('usuarios')

if (dados) {
    usuarios = JSON.parse(dados)
    mostrarUsuarios()
}

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