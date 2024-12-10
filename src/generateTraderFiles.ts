import {
  DIST_FOLDER,
  HALDOR_BUY_FILE,
  HALDOR_SELL_FILE,
  HALDOR_TO_BUY_COEFFICIENT,
  HALDOR_TO_SELL_COEFFICIENT,
  IS_THERZIE_MODS_ACTIVE,
} from './const';
import { blackForestItems } from './items/black-forest';
import { meadowsItems } from './items/meadows';
import { mistlandsItems } from './items/mistlands';
import { mountainsItems } from './items/mountains';
import { oceanItems } from './items/ocean';
import { plainsItems } from './items/plains';
import { swampItems } from './items/swamp';
import { therzieItems } from './mods/therzie';
import { IProcessedItem } from './types';
import { calcPrice } from './utils/calcPrice';
import { converToJson } from './utils/converToJson';
import { createFile } from './utils/createFile';

const haldorBuyFilePath = `${DIST_FOLDER}/${HALDOR_BUY_FILE}`;
const haldorSellFilePath = `${DIST_FOLDER}/${HALDOR_SELL_FILE}`;

const SELL_STACK = 1;

const allItems = [
  ...meadowsItems,
  ...blackForestItems,
  ...oceanItems,
  ...swampItems,
  ...mountainsItems,
  ...plainsItems,
  ...mistlandsItems,
  ...(IS_THERZIE_MODS_ACTIVE ? therzieItems : []),
];

const itemsToBuyFromHaldor = allItems.filter(
  item => typeof item.buyable === 'undefined' || item.buyable !== false,
);

const processedItemsToBuyFromHaldor = itemsToBuyFromHaldor.map<IProcessedItem>(
  item => {
    const { pricing, stack = 1 } = item;
    const { balanceCoefficient = 1, amountToSell = 1 } = pricing;
    return {
      prefab: item.prefab,
      stack: amountToSell,
      requiredGlobalKey: item.globalKeyToBuy,
      price: calcPrice({
        ...pricing,
        traderCoefficient: HALDOR_TO_BUY_COEFFICIENT,
        balanceCoefficient: balanceCoefficient * amountToSell,
        stack,
      }),
    };
  },
);

const itemsToSellToHaldor = allItems.filter(item => item.sellable);

const processedItemsToSellToHaldor = itemsToSellToHaldor.map<IProcessedItem>(
  item => {
    const { pricing, stack = 1 } = item;
    return {
      prefab: item.prefab,
      stack: SELL_STACK,
      requiredGlobalKey: item.globalKeyToSell,
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
