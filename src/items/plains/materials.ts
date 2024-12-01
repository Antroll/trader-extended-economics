import { IItem, OGlobalKey } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'Tar',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    pricing: {
      rarity: 2,
      time: 30,
      availability: 3,
      complexity: 3,
      amountToSell: 25,
    },
  },
  {
    prefab: 'GoblinTotem',
    stack: 30,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    pricing: {
      rarity: 3,
      time: 450,
      availability: 3,
      complexity: 3,
      amountToSell: 1,
    },
  },
  {
    prefab: 'Flax',
    stack: 100,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    pricing: {
      rarity: 2,
      time: 200,
      availability: 3,
      complexity: 2.5,
      amountToSell: 5,
    },
  },
  {
    prefab: 'Barley',
    stack: 100,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    pricing: {
      rarity: 2,
      time: 200,
      availability: 3,
      complexity: 2.5,
      amountToSell: 5,
    },
  },
];
