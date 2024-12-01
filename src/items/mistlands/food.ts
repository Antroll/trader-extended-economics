import { IItem, OGlobalKey } from '../../types';

export const food: IItem[] = [
  {
    prefab: 'MushroomJotunpuffs',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    pricing: {
      rarity: 2,
      time: 30,
      availability: 3.5,
      complexity: 2,
      amountToSell: 10,
      balanceCoefficient: 1.2,
    },
  },
  {
    prefab: 'MushroomMagecap',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    pricing: {
      rarity: 2,
      time: 30,
      availability: 3.5,
      complexity: 2,
      amountToSell: 10,
      balanceCoefficient: 1.2,
    },
  },
  {
    prefab: 'RoyalJelly',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    pricing: {
      rarity: 2,
      time: 30,
      availability: 3.5,
      complexity: 3,
      amountToSell: 10,
    },
  },
];
