const {myRemove, sum, myFizzBuzz, decode, encode, techList} = require('./exercicios')

// Exercicios 1
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

// Exercicios 2
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

// Exercicios 3
describe('Teste função myfizzbuzz', () => {
  it('checks if num === 15 returns fizzbuzz ', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  });

  it('checks if num === 9 returns fizz ', () => {
    expect(myFizzBuzz(9)).toMatch('fizz')
  });

  it('checks if num === 7 returns 7', () => {
    expect(myFizzBuzz(7)).toEqual(7)
  });

  it('checks if typeof num !== number returns false', () => {
    expect(myFizzBuzz('hello')).toEqual(false);
  });
});

// Exercicios 4
describe('Testes funçoes encode e decode', () => {
  it('checks if encode and decode are functions', () => {
    expect(typeof encode && typeof decode).toEqual('function');
  });

  it('checks if encode converts a e i o u in 1 2 3 4 5', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('checks if decode converts 1 2 3 4 5 in a e i o u', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('checks if decode returns the same amount of characters', () => {
    expect(decode('12345')).toHaveLength(5);
  });
})

