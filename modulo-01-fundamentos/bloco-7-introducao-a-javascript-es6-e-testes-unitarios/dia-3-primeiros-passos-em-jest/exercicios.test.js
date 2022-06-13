const {myRemove, sum, myFizzBuzz} = require('./exercicios')

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

describe('Teste função remove item array', () => {
  it('checks if returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3)
  });

  it('check if it doesnt return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });

  it('checks if returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5)
  });
});

describe('Teste função myfizzbuzz', () => {
  it('checks if num === 15 returns fizzbuzz ', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  });

  it('checks if num === 9 returns fizz ', () => {
    expect(myFizzBuzz(9)).toMatch('fizz')
  });

  it('checks if num === 7 returns 7', () => {
    expect(myFizzBuzz(7)).toEqual(7)
  })

  it('checks if typeof num !== number returns false', () => {
    expect(myFizzBuzz('hello')).toEqual(false);
  })
})