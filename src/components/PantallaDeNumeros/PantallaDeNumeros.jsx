import React from 'react'
import { css } from '@linaria/core'
import PropTypes from 'prop-types'

const PantallaDeNumerosStyle = css`
  width: 100%;
  height: 180px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 6rem;
  color: white;
`
const PantallaDeNumeros = ({ texto }) => (
  <div className={PantallaDeNumerosStyle}>{texto}</div>
)

PantallaDeNumeros.propTypes = {
  texto: PropTypes.string.isRequired,
}

export default PantallaDeNumeros
