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

mais.addEventListener('click', function () {
  operador = '+'
  acumulaOp()
  if (resultado) {
    calculaResultado(parseFloat(resultado))
  }
})

menos.addEventListener('click', function () {
  operador = '-'
  acumulaOp()
  if (resultado) {
    calculaResultado(parseFloat(resultado))
  }
})

vezes.addEventListener('click', function () {
  operador = '*'
  acumulaOp()
  if (resultado) {
    calculaResultado(parseFloat(resultado))
  }
})

divide.addEventListener('click', function () {
  operador = '/'
  acumulaOp()
  if (resultado) {
    calculaResultado(parseFloat(resultado))
  }
})

igual.addEventListener('click', function () {
  acumulaOp()
  calcula()
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

ponto.addEventListener('click', function () {
  tela.textContent += '.'
  acumulaNum('.')
})

//--------------------------------------------------------------

nove.addEventListener('click', function () {
  acumulaNum(9)
  tela.textContent += '9'
})

oito.addEventListener('click', function () {
  acumulaNum(8)
  tela.textContent += '8'
})

sete.addEventListener('click', function () {
  acumulaNum(7)
  tela.textContent += '7'
})

seis.addEventListener('click', function () {
  acumulaNum(6)
  tela.textContent += '6'
})

cinco.addEventListener('click', function () {
  acumulaNum(5)
  tela.textContent += '5'
})

quatro.addEventListener('click', function () {
  acumulaNum(4)
  tela.textContent += '4'
})

tres.addEventListener('click', function () {
  acumulaNum(3)
  tela.textContent += '3'
})

dois.addEventListener('click', function () {
  acumulaNum(2)
  tela.textContent += '2'
})

um.addEventListener('click', function () {
  acumulaNum(1)
  tela.textContent += '1'
})

zero.addEventListener('click', function () {
  acumulaNum(0)
  tela.textContent += '0'
})
