# Trader Economics

This application allows you to generate a configuration for the [Trader Extended](https://thunderstore.io/c/valheim/p/shudnal/TradersExtended/) mod.

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
