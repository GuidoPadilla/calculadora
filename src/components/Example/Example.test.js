import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Example from './Example'

describe('General App Test', () => {
  test('hello correct', () => {
    render(Example())
  })
  test('hello correct', () => {
    render(Example())
    const elemento = screen.getByText('hola')
    expect(elemento).toBeInTheDocument()
  })
  test('hello correct', () => {
    render(Example())
    const elemento = screen.getByText('hola')
    userEvent.click(elemento)
    expect(elemento).toHaveClass('active')
  })
})
