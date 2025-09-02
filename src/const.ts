import dotenv from 'dotenv';

dotenv.config();

/**
 * Multiplier that affects the traders prices when you want to buy something.
 */
export const HALDOR_TO_BUY_COEFFICIENT = 1.2;

/**
 * Multiplier that affects the traders prices when you want to sell something.
 */
export const HALDOR_TO_SELL_COEFFICIENT = 0.2;

/**
 * Multiplier that affects the price of the loot from bosses.
 */
export const BOSS_PRICE_BALANCE_MULTIPLIER = 5;

/**
 * Buy from Haldor
 */
export const HALDOR_BUY_FILE = 'shudnal.TradersExtended.haldor.buy.json';

/**
 * Sell to Haldor
 */
export const HALDOR_SELL_FILE = 'shudnal.TradersExtended.haldor.sell.json';

/**
 * Folder path for the output files.
 */
export const DIST_FOLDER = './dist';

/**
 * Path to the Valheim profile.
 * Can be set in `.env` file. See description in `README.md`.
 */
export const PROFILE_PATH = process.env.PROFILE_PATH;

/**
 * If this is set to true, the prices for Therzie mods will be generated.
 */
export const IS_THERZIE_MODS_ACTIVE =
  process.env.IS_THERZIE_MODS_ACTIVE === 'true';
