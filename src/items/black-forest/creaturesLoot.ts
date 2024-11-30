import { IItem, OGlobalKey } from '../../types';

export const creaturesLoot: IItem[] = [
  {
    prefab: 'TrophyGreydwarf',
    stack: 20,
    sellable: true,
    buyable: false,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 3,
      time: 120,
      amountToSell: 1,
      availability: 1.5,
      complexity: 1,
    },
  },
  {
    prefab: 'TrophyGreydwarfBrute',
    stack: 20,
    sellable: true,
    buyable: false,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 4,
      time: 120,
      amountToSell: 1,
      availability: 1.5,
      complexity: 1.5,
    },
  },
  {
    prefab: 'TrophyGreydwarfShaman',
    stack: 20,
    sellable: true,
    buyable: false,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 3,
      time: 120,
      amountToSell: 1,
      availability: 1.5,
      complexity: 1.5,
    },
  },
  {
    prefab: 'TrophyForestTroll',
    stack: 20,
    sellable: true,
    buyable: false,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 3,
      time: 120,
      amountToSell: 1,
      availability: 1.5,
      complexity: 2.5,
    },
  },
  {
    prefab: 'TrollHide',
    stack: 20,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    pricing: {
      rarity: 2,
      time: 40,
      amountToSell: 5,
      availability: 1.5,
      complexity: 2.5,
    },
  },
];
