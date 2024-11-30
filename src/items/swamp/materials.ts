import { IItem, OGlobalKey } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'Guck',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 2,
      time: 90,
      availability: 2,
      complexity: 2,
      amountToSell: 5,
    },
  },
  {
    prefab: 'ElderBark',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 1,
      time: 10,
      availability: 2,
      complexity: 2,
      amountToSell: 25,
    },
  },
  {
    prefab: 'WitheredBone',
    stack: 30,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 2,
      time: 60,
      availability: 2,
      complexity: 1.5,
      amountToSell: 10,
    },
  },
];
