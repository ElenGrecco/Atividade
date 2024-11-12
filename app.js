/**
 * Botão do Pânico
 * @author Elen Grecco & Denis D'Angelo
 */

//variaveis 
let alerta = false
const botao = document.getElementById('button')

let som = new Audio("sound/alarm.mp3")

//pressionar a tela touch e manter no botão
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
	console.log('tela')
    som.play()
    }
)

//deixar de pressionar a tela touch no botão
botao.addEventListener('touchend', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    console.log('a tela não está pressionada no botão')
    som.pause()
      }
)

botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
	console.log('tela')
    som.play()
    }
)

botao.addEventListener('mouseup', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    console.log('a tela não está pressionada no botão')
    som.pause()
      }
)