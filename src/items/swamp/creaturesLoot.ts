import { BOSS_PRICE_BALANCE_MULTIPLIER } from '../../const';
import { IItem, OGlobalKey } from '../../types';

export const creaturesLoot: IItem[] = [
  {
    prefab: 'Ooze', // drop from Blob
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 1,
      time: 60,
      availability: 2,
      complexity: 1.5,
      amountToSell: 10,
    },
  },
  {
    prefab: 'TrophyBlob',
    stack: 20,
    sellable: true,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 3,
      time: 180,
      availability: 2,
      complexity: 1.5,
      amountToSell: 1,
    },
  },
  {
    prefab: 'Entrails', // drop from Draugr
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 1,
      time: 15,
      availability: 2,
      complexity: 2.5,
      amountToSell: 10,
    },
  },
  {
    prefab: 'TrophyDraugr',
    stack: 20,
    sellable: true,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 3,
      time: 180,
      availability: 2,
      complexity: 2,
      amountToSell: 1,
    },
  },
  {
    prefab: 'TrophyDraugrElite',
    stack: 20,
    sellable: true,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 3,
      time: 240,
      availability: 2,
      complexity: 2.5,
      amountToSell: 1,
    },
  },
  {
    prefab: 'Bloodbag', // drop from Leech
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 1,
      time: 50,
      availability: 2,
      complexity: 1.5,
      amountToSell: 10,
    },
  },
  {
    prefab: 'TrophyLeech',
    stack: 20,
    sellable: true,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 3,
      time: 180,
      availability: 2,
      complexity: 1.5,
      amountToSell: 1,
    },
  },
  {
    prefab: 'TrophySurtling',
    stack: 20,
    sellable: true,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 4,
      time: 240,
      availability: 2,
      complexity: 2,
      amountToSell: 1,
    },
  },
  {
    prefab: 'Chain',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 3,
      time: 180,
      availability: 2,
      complexity: 2.5,
      amountToSell: 1,
    },
  },
  {
    prefab: 'TrophyWraith',
    stack: 20,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 3,
      time: 180,
      availability: 2,
      complexity: 2.5,
      amountToSell: 1,
    },
  },
  {
    prefab: 'Root',
    stack: 50,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 2,
      time: 80,
      availability: 2,
      complexity: 3,
      amountToSell: 5,
    },
  },
  {
    prefab: 'TrophyAbomination',
    stack: 20,
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    pricing: {
      rarity: 4,
      time: 200,
      availability: 2,
      complexity: 3,
      amountToSell: 1,
    },
  },
  {
    prefab: 'TrophyBonemass',
    stack: 20,
    sellable: true,
    buyable: false,
    globalKeyToSell: OGlobalKey.defeatedBonemass,
    pricing: {
      rarity: 1,
      time: 90,
      availability: 2,
      complexity: 2.5,
      amountToSell: 1,
      balanceCoefficient: BOSS_PRICE_BALANCE_MULTIPLIER,
    },
  },
];