import { IItem } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'Wood',
    stack: 50,
    pricing: {
      rarity: 1,
      time: 2,
      availability: 1,
      complexity: 1,
      amountToSell: 50,
    },
  },
  {
    prefab: 'FineWood',
    stack: 50,
    pricing: {
      rarity: 2,
      time: 5,
      availability: 1.5,
      complexity: 1,
      amountToSell: 25,
    },
  },
  {
    prefab: 'Stone',
    stack: 50,
    pricing: {
      rarity: 1,
      time: 2,
      availability: 1,
      complexity: 1,
      amountToSell: 50,
    },
  },
  {
    prefab: 'Flint',
    stack: 30,
    pricing: {
      rarity: 1,
      time: 15,
      availability: 1,
      complexity: 1,
      amountToSell: 30,
    },
  },
  {
    prefab: 'Resin',
    stack: 50,
    pricing: {
      rarity: 1,
      time: 30,
      availability: 1,
      complexity: 1,
      amountToSell: 25,
    },
  },
  {
    prefab: 'Dandelion',
    stack: 50,
    pricing: {
      rarity: 2,
      time: 30,
      availability: 1,
      complexity: 1,
      amountToSell: 10,
    },
  },
];
