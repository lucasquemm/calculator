let tela = document.querySelector('#telaConteudo')
let resultado = document.querySelector('#telaResultado')
let expressaoNaTela = ''
let typedNum = []

let acumuladorDeNum = ''

let backspace = document.querySelector('#backspace')

let clear = document.querySelector('#clear')
let soma = document.querySelector('#soma')
let divide = document.querySelector('#divide')

let sete = document.querySelector('#sete')
let oito = document.querySelector('#oito')
let nove = document.querySelector('#nove')

let quatro = document.querySelector('#quatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let subtracao = document.querySelector('#subtracao')

let um = document.querySelector('#um')
let dois = document.querySelector('#dois')
let tres = document.querySelector('#tres')
let multiplicacao = document.querySelector('#multiplicacao')

let zero = document.querySelector('#zero')

let igual = document.querySelector('#igual')

function interpretaString2() {
  const a = typedNum.shift()
  const operation = typedNum.shift()
  const b = typedNum.shift()

  switch (operation) {
    case '+':
      typedNum.unshift(a + b)
      console.log(typedNum)
      break
    case '/':
      typedNum.unshift(a / b)
      console.log(typedNum)
      break
    case '*':
      typedNum.unshift(a * b)
      console.log(typedNum)
      break
    case '-':
      typedNum.unshift(a - b)
      console.log(typedNum)
      break
    default:
      console.log(typedNum)
      break
  }
  if (typedNum.length == 1) {
    resultado.textContent = typedNum
  } else {
    interpretaString2()
  }
}

function acumuladorDeNumerosRepetidos(num) {
  acumuladorDeNum += num

  console.log(num)
}

function acumuladorDeOperadores(operador) {
  typedNum.push(parseInt(acumuladorDeNum))
  acumuladorDeNum = ''
  if (operador != '=') {
    typedNum.push(operador)
  }
}

soma.addEventListener('click', function () {
  acumuladorDeOperadores('+')
  tela.textContent = expressaoNaTela += '+'
  console.log('+')
})

subtracao.addEventListener('click', function () {
  acumuladorDeOperadores('-')
  tela.textContent = expressaoNaTela += '-'
  console.log('-')
})

multiplicacao.addEventListener('click', function () {
  acumuladorDeOperadores('*')
  tela.textContent = expressaoNaTela += '*'
  console.log('*')
})

divide.addEventListener('click', function () {
  acumuladorDeOperadores('/')
  tela.textContent = expressaoNaTela += '/'
  console.log('/')
})

igual.addEventListener('click', function () {
  if (typedNum.length == 0) {
    alert('INSIRA ALGUM VALOR')
  } else {
    acumuladorDeOperadores('=')
    //console.log(interpretaStringOperacao())
    console.log(interpretaString2())
  }
})

clear.addEventListener('click', function () {
  resultado.textContent = ''
  acumuladorDeNum = ''
  tela.textContent = ''
  typedNum = []
  expressaoNaTela = ''
})

backspace.addEventListener('click', function () {
  expressaoNaTela = expressaoNaTela.substring(0, expressaoNaTela.length - 1)
  tela.textContent = expressaoNaTela
  console.log(expressaoNaTela)
})

//--------------------------------------------------------------

nove.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('9')
  tela.textContent = expressaoNaTela += '9'
})

oito.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('8')
  tela.textContent = expressaoNaTela += '8'
})

sete.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('7')
  tela.textContent = expressaoNaTela += '7'
})

seis.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('6')
  tela.textContent = expressaoNaTela += '6'
})

cinco.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('5')
  tela.textContent = expressaoNaTela += '5'
})

quatro.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('4')
  tela.textContent = expressaoNaTela += '4'
})

tres.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('3')
  tela.textContent = expressaoNaTela += '3'
})

dois.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('2')
  tela.textContent = expressaoNaTela += '2'
})

um.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('1')
  tela.textContent = expressaoNaTela += '1'
})

zero.addEventListener('click', function () {
  acumuladorDeNumerosRepetidos('0')
  tela.textContent = expressaoNaTela += '0'
})
