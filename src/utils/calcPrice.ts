import { Gold } from '../types';

export interface ICalcPriceArgs {
  /**
   * Item rarity. 1-5
   *
   * - 1 - common;
   * - 2 - uncommon;
   * - 3 - rare;
   * - 4 - epic;
   * - 5 - legendary;
   */
  rarity: number;
  /**
   * How much time it takes to get the amount in the `stack` field in minutes.
   */
  time: number;
  /**
   * Stack size. It is used to calculate the price of the item.
   */
  stack: number;
  /**
   * How available the item is. 1-3.
   *
   * - 1 - early game (meadows, black forest);
   * - 2 - mid game (swamp, mountain);
   * - 3 - late game (plains, mistlands, ashlands);
   */
  availability: number;
  /**
   * The complexity of creation / obtaining. 1-3.
   *
   * - 1 - simple;
   * - 2 - medium;
   * - 3 - hard;
   */
  complexity: number;
  /**
   * Additional coefficient for traders.
   * For example, if you want to calculate the price for selling
   * to a trader, you can set this to 0.5.
   */
  traderCoefficient: number;
  /**
   * Item balance coefficient. Can be used to adjust the price
   * if you think the item is too cheap or too expensive.
   *
   * Optional. Default is 1.
   */
  balanceCoefficient?: number;
}

/**
 * Calculates the price of an item based on various factors.
 *
 * @param {Object} args - The arguments for calculating the price.
 * @param {number} args.rarity - The rarity of the item.
 * @param {number} args.time - The time required to obtain or produce the item.
 * @param {number} args.availability - The availability of the item.
 * @param {number} args.complexity - The complexity of obtaining or producing the item.
 * @param {number} args.balanceCoefficient - The balance coefficient of the item. Optional. Default is 1.
 * @param {number} args.traderCoefficient - The trader coefficient of the item.
 *
 * @returns {Gold} The calculated price of the item in gold.
 */
export function calcPrice({
  rarity,
  time,
  availability,
  complexity,
  traderCoefficient,
  balanceCoefficient = 1,
  stack,
}: ICalcPriceArgs): Gold {
  const raw =
    rarity *
    Math.max((time / stack) * 2, 0.65) *
    availability *
    complexity *
    balanceCoefficient *
    traderCoefficient;
  return Math.round(raw);
}
