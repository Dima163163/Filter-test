import filter from './filter.js';

describe('Фильтр массива объектов по свойству', () => {
  const array = [
    {
      id: 12,
      name: 'Name 1',
    },
    {
      id: 22,
      name: 'Name 2',
    },
    {
      id: 32,
      name: 'Name 3',
    },
    {
      id: 222,
      name: 'Name 2',
    },
  ];

  it('Несколько совпадений', () => {
    const expected = [array[1], array[3]];
    const filtered = filter(array, 'name', 'Name 2');

    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('Нет совпадений', () => {
    const expected = [];
    const filtered = filter(array, 'name', 'Name 4');

    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('Одно совпадение по строке', () => {
    const expected = [array[2]];
    const filtered = filter(array, 'name', 'Name 3');

    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('Одно совпадение по числу', () => {
    const expected = [array[3]];
    const filtered = filter(array, 'id', 222);

    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });
});

describe('Фильтр массива объектов по свойству', () => {
  let objects = [
    {
      login: 'Maks',
      email: 'maks@maks.ru',
      company: 'METHED',
    },
    {
      login: 'Methed',
      email: 'info@methed.ru',
      company: 'METHED',
    },
    {
      login: 'Himidor',
      email: 'tomato@pomodoro.com',
      company: 'cucumber',
    }
  ];

  it('Несколько совпадений по company', () => {
    const expected = [objects[0], objects[1]];
    const filtered = filter(objects, 'company', 'METHED');

    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('Нет совпадений', () => {
    const expected = [];
    const filtered = filter(objects, 'email', 'methed@methed.ru');

    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('Одно совпадение по email', () => {
    const expected = [objects[1]];
    const filtered = filter(objects, 'email', 'info@methed.ru');

    expect(filtered.length === expected.length).toBe(true);
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });
});