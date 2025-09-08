# Trader Economics

This application allows you to generate a configuration for the [Trader Extended](https://thunderstore.io/c/valheim/p/shudnal/TradersExtended/) mod.

## Description

You can add or remove items from the configuration by editing the `src/items` and `src/mods` folders.
It is easy to understand how to add or remove items by looking at the existing items.

You can evaluate a thing by answering simple questions. Such as the difficulty of mining things and how long it will take to get a stack.

All estimations are made based on the normal game difficulty with x1 loot multiplier.

If you want to adjust the generated prices, you can do it by editing the `src/const.ts` file.

## Installation

1. Clone the repository to your local machine.
2. Install dependencies: `yarn install`
3. Copy `.env.example` to `.env` and set `PROFILE_PATH` to your Valheim profile path (where `BepInEx` lives).

## Usage

1. Run `yarn build` to generate the configuration.
2. The configuration will be saved to `dist` folder.

### Automatic deployment

Create `.env`, copy from `.env.example` and set `PROFILE_PATH` to your Valheim profile path (where `BepInEx` lives).

To copy the generated files automatically to `BepInEx/config`, run `yarn deploy`.
