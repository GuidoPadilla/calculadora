/* eslint-disable max-len */
import React from 'react'
import { css } from '@linaria/core'
import PantallaDeNumeros from '../PantallaDeNumeros/PantallaDeNumeros'
import MiBoton from '../MiBoton/MiBoton'

const appStyle = css`
  body, html {
    background-color: turquoise;
  }
  width: 500px;
  height: 750px;
  left: 700px;
  top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  
  > div:nth-child(2){
    display: grid;
    height: 570px;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-columns: 25% 25% 25% 25%;
  }

  > div:nth-child(2) button:nth-child(17){
    grid-column: 1 / span 2;
  }
`
let control = []
let escritura = false
// const formatter = new Intl.NumberFormat('en-US', {
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 2,
// })
const App = () => {
  const [resultado, setResultado] = React.useState('0')
  const onHandleClickNumber = (numero) => {
    if (resultado !== 'ERROR') {
      if (resultado.length < 9 && escritura === true) {
        setResultado(`${resultado}${numero}`)
      } else if (resultado.length <= 9 && escritura === false) {
        setResultado(`${numero}`)
        escritura = true
      }
    }
  }
  const tieneOperaciones = (evaluado) => evaluado[1]?.toString().includes('+') || evaluado[1]?.toString().includes('-') || evaluado[1]?.toString().includes('X') || evaluado[1]?.toString().includes('/') || evaluado[1]?.toString().includes('%')
  const onHandleClickErase = () => {
    setResultado('0')
    control = []
    escritura = false
  }
  const onHandleClickOperation = (operacion) => {
    if (resultado !== 'ERROR') {
      const agregado = parseFloat(resultado)
      if (tieneOperaciones(control)) {
        switch (control[1]) {
          case '+':
            control = [control[0] + agregado]
            break
          case '-':
            control = [control[0] - agregado]
            break
          case 'X':
            control = [control[0] * agregado]
            break
          case '/':
            control = [control[0] / agregado]
            break
          case '%':
            control = [control[0] % agregado]
            break
          default:
        }
        if (control[0] < 0 || !Number.isFinite(control[0])) {
          control = ['ERROR']
        }
      }
      if (control.length === 0) {
        control = [agregado]
      }
      let valorFinal = control[0].toString().includes('.') ? control[0].toFixed(2).toString() : control[0].toString()
      if (valorFinal.length > 9) {
        valorFinal = 'ERROR'
      }
      switch (operacion) {
        case '=':
          escritura = true
          setResultado(valorFinal)
          control = []
          break
        default:
          control.push(operacion)
          escritura = false
          setResultado(valorFinal)
      }
    }
  }
  const onHandleClickFomrmate = (operacion) => {
    if (resultado !== 'ERROR') {
      if (operacion === '+/-') {
        if (resultado.length < 9 || (resultado.length === 9 && resultado.includes('-'))) {
          const temporal = parseFloat(resultado) * -1
          setResultado(temporal.toString())
        }
      } else if (operacion === '.') {
        if (!resultado.includes('.')) {
          setResultado(`${resultado}.`)
          escritura = true
        }
      }
    }
  }
  return (
    <div className={appStyle}>
      <PantallaDeNumeros texto={resultado} />
      <div>
        <MiBoton texto="C" funcion={onHandleClickErase} />
        <MiBoton texto="+/-" funcion={onHandleClickFomrmate} />
        <MiBoton texto="%" funcion={onHandleClickOperation} />
        <MiBoton texto="/" funcion={onHandleClickOperation} />
        <MiBoton texto="7" funcion={onHandleClickNumber} />
        <MiBoton texto="8" funcion={onHandleClickNumber} />
        <MiBoton texto="9" funcion={onHandleClickNumber} />
        <MiBoton texto="X" funcion={onHandleClickOperation} />
        <MiBoton texto="4" funcion={onHandleClickNumber} />
        <MiBoton texto="5" funcion={onHandleClickNumber} />
        <MiBoton texto="6" funcion={onHandleClickNumber} />
        <MiBoton texto="-" funcion={onHandleClickOperation} />
        <MiBoton texto="1" funcion={onHandleClickNumber} />
        <MiBoton texto="2" funcion={onHandleClickNumber} />
        <MiBoton texto="3" funcion={onHandleClickNumber} />
        <MiBoton texto="+" funcion={onHandleClickOperation} />
        <MiBoton texto="0" funcion={onHandleClickNumber} />
        <MiBoton texto="." funcion={onHandleClickFomrmate} />
        <MiBoton texto="=" funcion={onHandleClickOperation} />
      </div>
    </div>
  )
}

export default App
