import { IItem } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'Mushroom',
    stack: 50,
    pricing: {
      rarity: 2,
      time: 120,
      availability: 1,
      complexity: 1.1,
      amountToSell: 5,
    },
  },
  {
    prefab: 'Raspberry',
    stack: 50,
    pricing: {
      rarity: 2,
      time: 120,
      availability: 1,
      complexity: 1,
      amountToSell: 5,
    },
  },
];
