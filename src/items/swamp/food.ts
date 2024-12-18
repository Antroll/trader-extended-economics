import { IItem, OGlobalKey } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'Turnip',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 2,
      time: 120,
      availability: 2,
      complexity: 3,
      amountToSell: 5,
    },
  },
];
