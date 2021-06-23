let tela = document.querySelector('#telaConteudo')
let resultado = document.querySelector('#telaResultado')
let expressaoNaTela = ''
let typedNum = []
let pilha = []
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
// let porcentagem = document.querySelector('#porcentagem')
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

// function interpretaStringOperacao() {
//   // enquanto for pelo menos 3 vai ser 2 numeros e uma operaocao 3-3
//   while (typedNum.length > 3) {
//     for (let i = 0; i < typedNum.length; i++) {
//       if (typedNum[i] == '+') {
//         // tentando montar uma forma pra pegar o valor da index antes e depois do operador, ai preciso remover eles da array typedNum e colocar em uma nova?
//         pilha = parseInt(typedNum[i - 1]) + parseInt(typedNum[i + 1])
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       } else if (typedNum[i] == '-') {
//         pilha = typedNum[i - 1] - typedNum[i + 1]
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       } else if (typedNum[i] == '*') {
//         pilha = typedNum[i - 1] * typedNum[i + 1]
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       } else if (typedNum[i] == '/') {
//         pilha = typedNum[i - 1] / typedNum[i + 1]
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       }
//     }
//   }
//   if (typedNum.length == 3) {
//     for (let i = 0; i < typedNum.length; i++) {
//       if (typedNum[i] == '+') {
//         pilha = parseInt(typedNum[i - 1]) + parseInt(typedNum[i + 1])
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       } else if (typedNum[i] == '-') {
//         pilha = typedNum[i - 1] - typedNum[i + 1]
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       } else if (typedNum[i] == '*') {
//         pilha = typedNum[i - 1] * typedNum[i + 1]
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       } else if (typedNum[i] == '/') {
//         pilha = typedNum[i - 1] / typedNum[i + 1]
//         typedNum.splice(0, 3, parseInt(pilha))
//         console.log(typedNum)
//       }
//     }
//   }
//   return (resultado.textContent = pilha)
// }

function acumuladorDeNumerosRepetidos(num) {
  acumuladorDeNum += num
  tela.textContent += num
  console.log(num)
}

function acumuladorDeOperadores(operador) {
  typedNum.push(parseInt(acumuladorDeNum))
  acumuladorDeNum = ''
  if (operador != '=') {
    typedNum.push(operador)
    tela.textContent += operador
  }
}

soma.addEventListener('click', function () {
  acumuladorDeOperadores('+')

  console.log('+')
})

porcentagem.addEventListener('click', function () {
  acumuladorDeOperadores('')
  console.log('')
})

subtracao.addEventListener('click', function () {
  acumuladorDeOperadores('-')
  console.log('-')
})

multiplicacao.addEventListener('click', function () {
  acumuladorDeOperadores('*')
  console.log('*')
})

divide.addEventListener('click', function () {
  acumuladorDeOperadores('/')
})

igual.addEventListener('click', function () {
  acumuladorDeOperadores('=')
  //console.log(interpretaStringOperacao())
  console.log(interpretaString2())
})

clear.addEventListener('click', function () {
  resultado.textContent = ''
  acumuladorDeNum = ''
  tela.textContent = ''
  typedNum = []
  pilha = []
})

backspace.addEventListener('click', function () {
  acumuladorDeNum = acumuladorDeNum.substring(0, acumuladorDeNum.length - 1)
  tela.textContent = acumuladorDeNum
  console.log(acumuladorDeNum)
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
