const {myRemove, sum, myFizzBuzz, decode, encode, techList, hydrate, searchEmployee} = require('./exercicios')

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
});

// Exercícios 5
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Testa função searchEmployee', () => {
  
  it('checks if id = 9852-2-2and detail = firstName returns Jeff', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toEqual('Jeff');
  });

  it('checks if id = 9852-2-2and detail = specialities returns [Ruby, SQL]', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });

  it('checks if exists error message if detail doesnt exist', () => {
    expect(() => searchEmployee('5555', 'firstName')).toThrow('Informação indisponível');
  });

})