import { IItem, OGlobalKey } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'Thistle',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 2,
      time: 60,
      amountToSell: 10,
      availability: 1.5,
      complexity: 1,
    },
  },
  {
    prefab: 'SurtlingCore',
    stack: 10,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 3,
      time: 40,
      amountToSell: 1,
      availability: 1.5,
      complexity: 2,
    },
  },
];
