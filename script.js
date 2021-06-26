let expressao = []
let operador = ''
let acumuladorDeNum = ''
let resultado = ''

let tela = document.querySelector('#telaConteudo')
let resultadoTela = document.querySelector('#telaResultado')

let clear = document.querySelector('#clear')
let sinal = document.querySelector('#sinal')
let ponto = document.querySelector('#ponto')

let menos = document.querySelector('#menos')
let mais = document.querySelector('#mais')
let divide = document.querySelector('#divide')
let vezes = document.querySelector('#vezes')

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

function numberClick(num) {
  return function () {
    acumulaNum(num)
    tela.textContent += num
  }
}

function opClick(operacao) {
  return function () {
    operador = operacao
    acumulaOp()
    if (resultado) {
      calculaResultado(parseFloat(resultado))
    }
  }
}

function pontoClick() {
  if (!acumuladorDeNum.includes('.')) {
    if (acumuladorDeNum == '') {
      acumuladorDeNum += 0
      tela.textContent += 0
    }
    tela.textContent += '.'
    acumulaNum('.')
  }
}

function clearAll() {
  resultadoTela.textContent = ''
  tela.textContent = ''
  expressao = []
  acumuladorDeNum = ''
  resultado = 0
}

function acumulaNum(num) {
  acumuladorDeNum += num
  console.log(num)
}

function acumulaOp() {
  if (acumuladorDeNum != '') {
    expressao.push(parseFloat(acumuladorDeNum))
  }
  acumuladorDeNum = ''
  tela.textContent = ''
}

function calcula() {
  let [a = 0, b = 0] = expressao
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
    resultadoTela.textContent = 'ERROR'
  }
  resultadoTela.textContent =
    typeof resultado == 'string' ? resultado : resultado.toFixed(2)
  expressao = []
}

function calculaResultado(num) {
  expressao.push(num)
}

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

mais.addEventListener('click', opClick('+'))

menos.addEventListener('click', opClick('-'))

vezes.addEventListener('click', opClick('*'))

divide.addEventListener('click', opClick('/'))

igual.addEventListener('click', function () {
  if (operador == '') {
    resultadoTela.textContent = 'ERROR'
  } else {
    acumulaOp()
    calcula()
  }
})

clear.addEventListener('click', function () {
  clearAll()
})

sinal.addEventListener('click', function () {
  if (acumuladorDeNum == '') {
    acumuladorDeNum = tela.textContent = resultado * -1
    resultado = 0
  } else {
    acumuladorDeNum = tela.textContent = parseFloat(acumuladorDeNum) * -1
  }
})

ponto.addEventListener('click', pontoClick)

//--------------------------------------------------------------
document.addEventListener('keyup', keypress)

function keypress(e) {
  if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    numberClick(parseInt(e.key))()
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    opClick(e.key)()
  } else if (e.key == '.') {
    pontoClick()
  }
}

nove.addEventListener('click', numberClick(9))

oito.addEventListener('click', numberClick(8))

sete.addEventListener('click', numberClick(7))

seis.addEventListener('click', numberClick(6))

cinco.addEventListener('click', numberClick(5))

quatro.addEventListener('click', numberClick(4))

tres.addEventListener('click', numberClick(3))

dois.addEventListener('click', numberClick(2))

um.addEventListener('click', numberClick(1))

zero.addEventListener('click', numberClick(0))
