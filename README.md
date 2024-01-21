# fivem-ts-rollup-bundler-with-obfuscator-boilerplate
A TypeScript bundler (Rollup) with an obfuscation plugin boilerplate for the FiveM platform. For developers, by developers.

## Description
As the repository title implies, this is a boilerplate that FiveM developers can use in their projects. The template is designed to be faster than other bundlers for the developer's ease of use.

## Features
1. TypeScript to JavaScript transpiler.
2. Rollup bundler to bundle up multiple source files into two; client-side and server-side.
3. Built-in JavaScript obfuscation plugin to prevent code stealing.
4. Faster than other bundlers.
5. Supports CitizenFX natives using @citizenfx/client & @citizenfx/server packages.

## Usage
1. Clone repository/boilerplate into your ``resources/*`` folder.
2. Open the terminal in your project and execute ``npm i`` to install the boilerplate dependencies.
3. Either modify ``rollup.config.js`` to your liking or leave it as it is.
4. Open the terminal again and execute ``npm run watch`` to make the bundler watch for any code changes; execute ``npm run build`` if your code is production-ready.
5. Enjoy!
