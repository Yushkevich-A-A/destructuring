import { destructuring } from '../destructuring';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

test('тестирование функции для объекта с некоторыми недоступными навыками', () => {
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  expect(destructuring(character)).toEqual(expected);
});

test('тестирование функции для объекта без навыков на отсутствие ошибки', () => {
  delete character.special;

  expect(() => destructuring(character)).not.toThrowError();
});

test('тестирование функции для объекта без навыков', () => {
  delete character.special;

  expect(destructuring(character)).toEqual([]);
});
