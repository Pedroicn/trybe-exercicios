const sum = require('./exercicios')

describe('Teste função soma', () => {
  it('checks if 4 + 5 equals 9', () => {
    expect(sum(4,5)).toEqual(9);
  })

  it('checks if 0 + 0 equals 0', () => {
    expect(sum(0, 0)).toEqual(0)
  })

  it('checks if throw an error when a or b equals string', () => {
    expect(() => sum(4, '5')).toThrow(Error)
  })

  it('checks if the throw msg is "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers')
  })
})