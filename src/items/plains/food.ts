import { IItem, OGlobalKey } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'Cloudberry',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    pricing: {
      rarity: 1,
      time: 20,
      availability: 3,
      complexity: 1.5,
      amountToSell: 25,
    },
  },
];
