import { BOSS_PRICE_BALANCE_MULTIPLIER } from '../../const';
import { IItem } from '../../types';

export const creaturesLoot: IItem[] = [
  {
    prefab: 'LeatherScraps',
    stack: 50,
    sellable: true,
    pricing: {
      rarity: 2,
      time: 30,
      availability: 1,
      complexity: 1,
      amountToSell: 10,
    },
  },
  {
    prefab: 'Feathers',
    stack: 50,
    pricing: {
      rarity: 2,
      time: 10,
      availability: 1,
      complexity: 1.5,
      amountToSell: 10,
    },
  },
  {
    prefab: 'DeerHide',
    stack: 50,
    sellable: true,
    pricing: {
      rarity: 1,
      time: 60,
      availability: 1,
      complexity: 1.5,
      amountToSell: 10,
    },
  },
  {
    prefab: 'NeckTail',
    stack: 50,
    sellable: true,
    pricing: {
      rarity: 1.5,
      time: 45,
      availability: 1,
      complexity: 1,
      amountToSell: 10,
    },
  },
  {
    prefab: 'TrophyBoar',
    stack: 20,
    sellable: true,
    pricing: {
      rarity: 3,
      time: 180,
      availability: 1,
      complexity: 1,
      amountToSell: 1,
    },
  },
  {
    prefab: 'TrophyNeck',
    stack: 20,
    sellable: true,
    pricing: {
      rarity: 3,
      time: 190,
      availability: 1,
      complexity: 1,
      amountToSell: 1,
    },
  },
  {
    prefab: 'TrophyDeer',
    stack: 20,
    sellable: true,
    pricing: {
      rarity: 3,
      time: 180,
      availability: 1,
      complexity: 1.5,
      amountToSell: 1,
    },
  },
  {
    prefab: 'TrophyEikthyr',
    stack: 20,
    sellable: true,
    buyable: false,
    pricing: {
      rarity: 1,
      time: 60,
      availability: 1.5,
      complexity: 3,
      amountToSell: 1,
      balanceCoefficient: BOSS_PRICE_BALANCE_MULTIPLIER,
    },
  },
  {
    prefab: 'HardAntler',
    stack: 50,
    sellable: true,
    buyable: false,
    pricing: {
      rarity: 1,
      time: 45,
      availability: 1.5,
      complexity: 3,
      amountToSell: 1,
      balanceCoefficient: BOSS_PRICE_BALANCE_MULTIPLIER,
    },
  },
  {
    prefab: 'DeerMeat',
    stack: 20,
    pricing: {
      rarity: 1,
      time: 30,
      availability: 1,
      complexity: 1.5,
      amountToSell: 10,
    },
  },
  {
    prefab: 'RawMeat',
    stack: 20,
    pricing: {
      rarity: 1,
      time: 20,
      availability: 1,
      complexity: 1,
      amountToSell: 20,
    },
  },
];
