import { IItem, OGlobalKey } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'Obsidian',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedBonemass,
    pricing: {
      rarity: 2,
      time: 20,
      availability: 2.5,
      complexity: 1.5,
      amountToSell: 25,
    },
  },
  {
    prefab: 'SilverOre',
    stack: 30,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    globalKeyToSell: OGlobalKey.defeatedBonemass,
    pricing: {
      rarity: 2,
      time: 30,
      availability: 2.5,
      complexity: 2,
      amountToSell: 10,
      balanceCoefficient: 2,
    },
  },
  {
    prefab: 'DragonEgg',
    stack: 1,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    globalKeyToSell: OGlobalKey.defeatedBonemass,
    pricing: {
      rarity: 3,
      time: 15,
      availability: 2.5,
      complexity: 2,
      amountToSell: 1,
      balanceCoefficient: 1.5,
    },
  },
  {
    prefab: 'Crystal',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedBonemass,
    pricing: {
      rarity: 2,
      time: 90,
      availability: 2.5,
      complexity: 1.5,
      amountToSell: 10,
    },
  },
];
