import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@linaria/core'

const MiBotonStyle = css`
  width: 100%;
  height: auto;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`
const MiBoton = ({ texto, funcion }) => (
  <button className={MiBotonStyle} onClick={() => funcion(texto)} type="button">
    {texto}
  </button>
)

MiBoton.propTypes = {
  texto: PropTypes.string.isRequired,
  funcion: PropTypes.func.isRequired,
}

export default MiBoton
