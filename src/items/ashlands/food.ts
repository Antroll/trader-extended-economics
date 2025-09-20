import { IItem, OGlobalKey } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'Fiddleheadfern',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedQueen,
    pricing: {
      rarity: 1,
      time: 30,
      availability: 3.5,
      complexity: 1,
      amountToSell: 10,
    },
  },
  {
    prefab: 'MushroomSmokePuff',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedQueen,
    pricing: {
      rarity: 1,
      time: 30,
      availability: 3.5,
      complexity: 1,
      amountToSell: 10,
    },
  },
  {
    prefab: 'Vineberry',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedQueen,
    pricing: {
      rarity: 2,
      time: 45,
      availability: 3.5,
      complexity: 1,
      amountToSell: 10,
    },
  },
];
