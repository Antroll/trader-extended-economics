import { IItem, OGlobalKey } from '../../types';

export const materials: IItem[] = [
  {
    prefab: 'Chitin',
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    stack: 50,
    pricing: {
      rarity: 3,
      time: 90,
      availability: 2,
      complexity: 2,
      amountToSell: 5,
    },
  },
];
