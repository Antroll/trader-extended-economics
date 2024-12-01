import { IItem, OGlobalKey } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'Chitin',
    stack: 50,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 3,
      time: 90,
      availability: 2,
      complexity: 2,
      amountToSell: 5,
    },
  },
];
