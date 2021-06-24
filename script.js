let expressao = []
let operador = ''

let tela = document.querySelector('#telaConteudo')
let resultadoTela = document.querySelector('#telaResultado')

let menos = document.querySelector('#menos')
let clear = document.querySelector('#clear')
let mais = document.querySelector('#mais')
let divide = document.querySelector('#divide')
let vezes = document.querySelector('#vezes')
let ponto = document.querySelector('#ponto')

let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')

let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')

let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')

let zero = document.querySelector('#zero')

let igual = document.querySelector('#igual')

function soma(a, b) {
  return a + b
}
function subtracao(a, b) {
  return a - b
}
function multiplicacao(a, b) {
  return a * b
}
function divisao(a, b) {
  return a / b
}

mais.addEventListener('click', function () {
  operador = '+'
})

menos.addEventListener('click', function () {
  operador = '-'
})

vezes.addEventListener('click', function () {
  operador = '*'
})

divide.addEventListener('click', function () {
  operador = '/'
})

igual.addEventListener('click', function () {
  let resultado
  let [a, b] = expressao
  switch (operador) {
    case '+':
      resultado = soma(a, b)
      break
    case '-':
      resultado = subtracao(a, b)
      break
    case '*':
      resultado = multiplicacao(a, b)
      break
    case '/':
      resultado = b == 0 ? 'ERROR' : divisao(a, b)
      break
  }
  if (typeof a != 'number' || typeof b != 'number' || !operador) {
    resultado = 'ERROR'
  }
  resultadoTela.textContent = resultado
  expressao = []
})

ponto.addEventListener('click', function () {
  tela.textContent = '.'
})

clear.addEventListener('click', function () {
  resultadoTela.textContent = ''
  tela.textContent = ''
  expressao = []
})

//--------------------------------------------------------------

nove.addEventListener('click', function () {
  expressao.push(parseInt(9))
  tela.textContent = '9'
})

oito.addEventListener('click', function () {
  expressao.push(parseInt(8))
  tela.textContent = '8'
})

sete.addEventListener('click', function () {
  expressao.push(parseInt(7))
  tela.textContent = '7'
})

seis.addEventListener('click', function () {
  expressao.push(parseInt(6))
  tela.textContent = '6'
})

cinco.addEventListener('click', function () {
  expressao.push(parseInt(5))
  tela.textContent = '5'
})

quatro.addEventListener('click', function () {
  expressao.push(parseInt(4))
  tela.textContent = '4'
})

tres.addEventListener('click', function () {
  expressao.push(parseInt(3))
  tela.textContent = '3'
})

dois.addEventListener('click', function () {
  expressao.push(parseInt(2))
  tela.textContent = '2'
})

um.addEventListener('click', function () {
  expressao.push(parseInt(1))
  tela.textContent = '1'
})

zero.addEventListener('click', function () {
  expressao.push(parseInt(0))
  tela.textContent = '0'
})
