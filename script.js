let tela = document.querySelector('#telaConteudo')
let resultado = document.querySelector('#telaResultado')
let calculo = ''
let numeros = []
let acumuladorDeNum = ''

let backspace = document.querySelector('#backspace')
//let = document.querySelector('#')
let clear = document.querySelector('#clear')
// let barra = document.querySelector('#barra')
let divide = document.querySelector('#divide')
//let = document.querySelector('#')
let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')
let porcentagem = document.querySelector('#porcentagem')
let = document.querySelector('#backspace')
let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let subtracao = document.querySelector('#subtracao')
let = document.querySelector('#backspace')
let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let multiplicacao = document.querySelector('#multiplicacao')
//let = document.querySelector('#')
let zero = document.querySelector('#zero')
//let = document.querySelector('#')
let igual = document.querySelector('#igual')

function interpretaString() {
  let resultadoFinal
  for (let i = 0; i < numeros.length; i++) {
    switch (numeros[i]) {
      case '+':
        conta = numeros.shift(numeros[i])
        resultadoFinal = conta[i - 1] + conta[i + 1]

        break
      case '/':
        break
      case '*':
        break
      case '-':
        break
      default:
        break
    }
  }
  return (resultado.textContent = resultadoFinal)
}

function acumuladorDeNumerosRepetidos(num) {
  acumuladorDeNum += num
  tela.textContent += num
  console.log(num)
}

function acumuladorDeOperadores(operador) {
  numeros.push(parseInt(acumuladorDeNum))
  acumuladorDeNum = ''
  if (operador != '=') {
    numeros.push(operador)
    tela.textContent += operador
  }
}

soma.addEventListener('click', function () {
  acumuladorDeOperadores('+')

  console.log('+')
})

porcentagem.addEventListener('click', function () {
  tela.textContent = calculo += '%'
  console.log('%')
})

subtracao.addEventListener('click', function () {
  tela.textContent = calculo += '-'
  console.log('-')
})

multiplicacao.addEventListener('click', function () {
  tela.textContent = calculo += '*'
  console.log('*')
})

divide.addEventListener('click', function () {
  tela.textContent = calculo += '/'
})

igual.addEventListener('click', function () {
  acumuladorDeOperadores('=')
  console.log(interpretaString())
})

clear.addEventListener('click', function () {
  resultado.textContent = ''
  acumuladorDeNum = ''
})

//--------------------------------------------------------------

nove.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('9')
})

oito.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('8')
})

sete.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('7')
})

seis.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('6')
})

cinco.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('5')
})

quatro.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('4')
})

tres.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('3')
})

dois.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('2')
})

um.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('1')
})

zero.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('0')
})
