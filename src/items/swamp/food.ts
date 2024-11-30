import { IItem, OGlobalKey } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'Turnip',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 2,
      time: 150,
      availability: 2,
      complexity: 2,
      amountToSell: 5,
    },
  },
];
