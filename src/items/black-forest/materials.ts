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
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 3,
      time: 40,
      amountToSell: 1,
      availability: 1.5,
      complexity: 2,
    },
  },
  {
    prefab: 'TinOre',
    stack: 30,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 2,
      time: 20,
      amountToSell: 10,
      availability: 1.5,
      complexity: 1,
    },
  },
  {
    prefab: 'CopperOre',
    stack: 30,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 2,
      time: 30,
      amountToSell: 10,
      availability: 1.5,
      complexity: 2,
    },
  },
];
