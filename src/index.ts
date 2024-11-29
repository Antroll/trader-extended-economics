import { meadowsItems } from './items/meadows';
import { IProcessedItem } from './types';
import { calcPrice } from './utils/calcPrice';
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

const itemsTobuyFromHaldor = meadowsItems.map<IProcessedItem>(item => {
  return {
    prefab: item.prefab,
    price: calcPrice({
      ...item,
      balanceCoefficient: item.stack,
      traderCoefficient: 3,
    }),
    stack: item.stack || 1,
  };
});

const itemsToSellToHaldor = meadowsItems
  .filter(item => item.sellable)
  .map<IProcessedItem>(item => {
    return {
      prefab: item.prefab,
      price: calcPrice({
        ...item,
        traderCoefficient: 0.5,
      }),
      stack: 1,
    };
  });

createFile(haldorBuyFilePath, JSON.stringify(itemsTobuyFromHaldor, null, 2));
console.log(`JSON-file sucessfuly created: ${haldorBuyFilePath}`);

createFile(haldorSellFilePath, JSON.stringify(itemsToSellToHaldor, null, 2));
console.log(`JSON-file sucessfuly created: ${haldorSellFilePath}`);
