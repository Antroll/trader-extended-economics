import { ICalcPriceArgs } from './utils/calcPrice';

export type Gold = number;

export interface IItem extends Omit<ICalcPriceArgs, 'traderCoefficient'> {
  prefab: string;
  sellable: boolean;
  stack?: number;
}

export const OGlobalKey = {
  defeatedEikthyr: 'defeated_eikthyr',
  defeatedTheElder: 'defeated_gdking',
  defeatedBonemass: 'defeated_bonemass',
  defeatedModer: 'defeated_dragon',
  defeatedYagluth: 'defeated_goblinking',
  defeatedQueen: 'defeated_queen',
  defeatedFader: 'defeated_fader',
} as const;
export type TGlobalKey = (typeof OGlobalKey)[keyof typeof OGlobalKey];

export interface IProcessedItem {
  prefab: string;
  stack: number;
  price: Gold;
  requiredGlobalKey?: TGlobalKey;
}
