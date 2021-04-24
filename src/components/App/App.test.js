/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('General Calculator Test Functions', () => {
  test('No more than 9 digits', () => {
    render(<App />)
    const pantalla = screen.getByText('0', { selector: 'div' })
    const boton1 = screen.getByText('1', { selector: 'button' })
    // 10 clicks in button of value 1
    for (let i = 0; i < 10; i += 1) {
      userEvent.click(boton1)
    }
    expect(pantalla).toHaveTextContent('111111111')
  })
  test('No negatives in screen on operation', () => {
    render(<App />)
    const pantalla = screen.getByText('0', { selector: 'div' })
    const boton1 = screen.getByText('1', { selector: 'button' })
    const boton2 = screen.getByText('2', { selector: 'button' })
    const botonResta = screen.getByText('-', { selector: 'button' })
    const botonIgual = screen.getByText('=', { selector: 'button' })
    // 1-2=-1
    userEvent.click(boton1)
    userEvent.click(botonResta)
    userEvent.click(boton2)
    userEvent.click(botonIgual)
    expect(pantalla).toHaveTextContent('ERROR')
  })
  test('No numbers greater than 999999999 on operation', () => {
    render(<App />)
    const pantalla = screen.getByText('0', { selector: 'div' })
    const boton2 = screen.getByText('2', { selector: 'button' })
    const botonMultiplicacion = screen.getByText('X', { selector: 'button' })
    const botonIgual = screen.getByText('=', { selector: 'button' })
    // 222222*222222=4.9E10
    // 6 clicks in button of value 2
    for (let i = 0; i < 6; i += 1) {
      userEvent.click(boton2)
    }
    userEvent.click(botonMultiplicacion)
    // 6 clicks in button of value 2
    for (let i = 0; i < 6; i += 1) {
      userEvent.click(boton2)
    }
    userEvent.click(botonIgual)
    expect(pantalla).toHaveTextContent('ERROR')
  })
  test('5*5*5=125 on screen', () => {
    render(<App />)
    const pantalla = screen.getByText('0', { selector: 'div' })
    const boton2 = screen.getByText('5', { selector: 'button' })
    const botonMultiplicacion = screen.getByText('X', { selector: 'button' })
    const botonIgual = screen.getByText('=', { selector: 'button' })
    userEvent.click(boton2)
    userEvent.click(botonMultiplicacion)
    userEvent.click(boton2)
    userEvent.click(botonMultiplicacion)
    userEvent.click(boton2)
    userEvent.click(botonIgual)
    expect(pantalla).toHaveTextContent('125')
  })
  test('Convert positive to negative number', () => {
    render(<App />)
    const pantalla = screen.getByText('0', { selector: 'div' })
    const boton2 = screen.getByText('2', { selector: 'button' })
    const botonPositivoNegativo = screen.getByText('+/-', { selector: 'button' })
    userEvent.click(boton2)
    userEvent.click(botonPositivoNegativo)
    expect(pantalla).toHaveTextContent('-2')
  })
})
