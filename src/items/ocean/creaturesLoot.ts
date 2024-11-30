import { IItem, OGlobalKey } from '../../types';

export const creaturesLoot: IItem[] = [
  {
    prefab: 'SerpentMeat',
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    stack: 50,
    pricing: {
      rarity: 3,
      time: 120,
      availability: 2,
      complexity: 2,
      amountToSell: 5,
    },
  },
  {
    prefab: 'SerpentScale',
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    stack: 50,
    pricing: {
      rarity: 3,
      time: 100,
      availability: 2,
      complexity: 2,
      amountToSell: 10,
    },
  },
  {
    prefab: 'TrophySerpent',
    stack: 20,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 4,
      time: 360,
      availability: 2,
      complexity: 2,
      amountToSell: 1,
    },
  },
];
