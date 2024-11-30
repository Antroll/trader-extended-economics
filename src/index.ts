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

const HALDOR_TO_BUY_COEFFICIENT = 1;
const HALDOR_TO_SELL_COEFFICIENT = 0.33;
const SELL_STACK = 1;

const itemsToBuyFromHaldor = [...meadowsItems].filter(
  item => typeof item.buyable === 'undefined' && item.buyable !== false,
);

const processedItemsToBuyFromHaldor = itemsToBuyFromHaldor.map<IProcessedItem>(
  item => {
    const { pricing, stack = 1 } = item;
    const { balanceCoefficient = 1, amountToSell = 1 } = pricing;
    return {
      prefab: item.prefab,
      stack: amountToSell,
      price: calcPrice({
        ...pricing,
        traderCoefficient: HALDOR_TO_BUY_COEFFICIENT,
        balanceCoefficient: balanceCoefficient * amountToSell,
        stack,
      }),
    };
  },
);

const itemsToSellToHaldor = [...meadowsItems].filter(item => item.sellable);

const processedItemsToSellToHaldor = itemsToSellToHaldor.map<IProcessedItem>(
  item => {
    const { pricing, stack = 1 } = item;
    return {
      prefab: item.prefab,
      stack: SELL_STACK,
      price: calcPrice({
        ...pricing,
        traderCoefficient: HALDOR_TO_SELL_COEFFICIENT,
        stack,
      }),
    };
  },
);

createFile(haldorBuyFilePath, converToJson(processedItemsToBuyFromHaldor));
createFile(haldorSellFilePath, converToJson(processedItemsToSellToHaldor));
