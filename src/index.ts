import { meadowsItems } from './items/meadows';
import { IProcessedItem } from './types';
import { calcPrice } from './utils/calcPrice';
import { converToJson } from './utils/converToJson';
import { createFile } from './utils/createFile';

const DIST_FOLDER = './dist';
/**
 * Buy from Haldor
 */
const HALDOR_BUY_FILE = 'shudnal.TradersExtended.haldor.buy.json';

/**
 * Sell to Haldor
 */
const HALDOR_SELL_FILE = 'shudnal.TradersExtended.haldor.sell.json';

const haldorBuyFilePath = `${DIST_FOLDER}/${HALDOR_BUY_FILE}`;
const haldorSellFilePath = `${DIST_FOLDER}/${HALDOR_SELL_FILE}`;

const HALDOR_TO_BUY_COEFFICIENT = 2;
const HALDOR_TO_SELL_COEFFICIENT = 0.5;

const itemsToBuyFromHaldor = meadowsItems.map<IProcessedItem>(item => {
  return {
    prefab: item.prefab,
    stack: item.stack || 1,
    price: calcPrice({
      ...item,
      balanceCoefficient: item.balanceCoefficient || item.stack,
      traderCoefficient: HALDOR_TO_BUY_COEFFICIENT,
    }),
  };
});

const itemsToSellToHaldor = meadowsItems
  .filter(item => item.sellable)
  .map<IProcessedItem>(item => {
    return {
      prefab: item.prefab,
      stack: 1,
      price: calcPrice({
        ...item,
        traderCoefficient: HALDOR_TO_SELL_COEFFICIENT,
      }),
    };
  });

createFile(haldorBuyFilePath, converToJson(itemsToBuyFromHaldor));
createFile(haldorSellFilePath, converToJson(itemsToSellToHaldor));
