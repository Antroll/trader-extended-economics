import { IItem, OGlobalKey } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'Blueberries',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 2,
      time: 120,
      amountToSell: 5,
      availability: 1.5,
      complexity: 1,
    },
  },
  {
    prefab: 'MushroomYellow',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 2,
      time: 90,
      amountToSell: 5,
      availability: 1.5,
      complexity: 1.5,
    },
  },
  {
    prefab: 'Carrot',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 2,
      time: 120,
      amountToSell: 5,
      availability: 1.5,
      complexity: 2,
    },
  },
];
