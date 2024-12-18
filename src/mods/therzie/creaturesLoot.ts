import { BOSS_PRICE_BALANCE_MULTIPLIER } from '../../const';
import { IItem, OGlobalKey } from '../../types';

export const creaturesLoot: IItem[] = [
  {
    prefab: 'TrophyFox_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    stack: 20,
    pricing: {
      availability: 1,
      complexity: 1,
      rarity: 3,
      time: 180,
    },
  },
  {
    prefab: 'TrophySheep_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedEikthyr,
    stack: 20,
    pricing: {
      availability: 1,
      complexity: 1,
      rarity: 3,
      time: 120,
    },
  },
  {
    prefab: 'TrophyRazorback_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    stack: 20,
    pricing: {
      availability: 1.5,
      complexity: 1,
      rarity: 3,
      time: 180,
    },
  },
  {
    prefab: 'TrophyAsmodeus_TW',
    sellable: true,
    buyable: false,
    stack: 20,
    pricing: {
      availability: 1,
      complexity: 2,
      rarity: 1,
      time: 120,
      balanceCoefficient: BOSS_PRICE_BALANCE_MULTIPLIER,
    },
  },
  {
    prefab: 'TrophyBlackBear_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedTheElder,
    globalKeyToSell: OGlobalKey.defeatedEikthyr,
    stack: 20,
    pricing: {
      availability: 1.5,
      complexity: 1.3,
      rarity: 3,
      time: 180,
    },
  },
  {
    prefab: 'TrophyCrawler_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedBonemass,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    stack: 20,
    pricing: {
      availability: 2,
      complexity: 1.5,
      rarity: 3,
      time: 240,
    },
  },
  {
    prefab: 'TrophyRottingElk_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedBonemass,
    globalKeyToSell: OGlobalKey.defeatedTheElder,
    stack: 20,
    pricing: {
      availability: 2,
      complexity: 1.2,
      rarity: 3,
      time: 180,
    },
  },
  {
    prefab: 'TrophyGrizzlyBear_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    globalKeyToSell: OGlobalKey.defeatedBonemass,
    stack: 20,
    pricing: {
      availability: 2.5,
      complexity: 2,
      rarity: 3,
      time: 240,
    },
  },
  {
    prefab: 'TrophyObsidianGolem_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedModer,
    globalKeyToSell: OGlobalKey.defeatedBonemass,
    stack: 20,
    pricing: {
      availability: 2.5,
      complexity: 3,
      rarity: 3,
      time: 240,
    },
  },
  {
    prefab: 'TrophyProwler_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    globalKeyToSell: OGlobalKey.defeatedModer,
    stack: 20,
    pricing: {
      availability: 3,
      complexity: 2.2,
      rarity: 3,
      time: 240,
    },
  },
  {
    prefab: 'TrophyShark_TW',
    sellable: true,
    globalKeyToBuy: OGlobalKey.defeatedYagluth,
    globalKeyToSell: OGlobalKey.defeatedModer,
    stack: 20,
    pricing: {
      availability: 3,
      complexity: 1.5,
      rarity: 4,
      time: 400,
    },
  },
];
