import { IItem, OGlobalKey } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'YggdrasilWood',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    pricing: {
      rarity: 1,
      time: 15,
      availability: 3.5,
      complexity: 2.5,
      amountToSell: 25,
    },
  },
  {
    prefab: 'BlackMarble',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    pricing: {
      rarity: 1,
      time: 15,
      availability: 3.5,
      complexity: 2.5,
      amountToSell: 50,
      balanceCoefficient: 1.1,
    },
  },
  {
    prefab: 'JuteBlue',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    pricing: {
      rarity: 2,
      time: 50,
      availability: 3.5,
      complexity: 3,
      amountToSell: 15,
    },
  },
  {
    prefab: 'Softtissue',
    stack: 40,
    globalKeyToBuy: OGlobalKey.defeatedQueen,
    pricing: {
      rarity: 3,
      time: 60,
      availability: 3.5,
      complexity: 3,
      amountToSell: 20,
    },
  },
  {
    prefab: 'BlackCore',
    stack: 20,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedQueen,
    globalKeyToSell: OGlobalKey.defeatedQueen,
    pricing: {
      rarity: 4,
      time: 120,
      availability: 3.5,
      complexity: 3,
      amountToSell: 1,
    },
  },
  {
    prefab: 'DvergrKeyFragment',
    stack: 9,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedQueen,
    globalKeyToSell: OGlobalKey.defeatedQueen,
    pricing: {
      rarity: 4,
      time: 120,
      availability: 3.5,
      complexity: 3,
      amountToSell: 1,
    },
  },
];
