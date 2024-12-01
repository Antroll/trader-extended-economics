import { IItem, OGlobalKey } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'Onion',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedBonemass,
    pricing: {
      rarity: 3,
      time: 120,
      availability: 2.5,
      complexity: 3,
      amountToSell: 5,
    },
  },
];
