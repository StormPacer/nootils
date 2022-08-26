<div align="center"><img align="center" src="https://github.com/StormPacer/nootils/blob/main/logo.png?raw=true" /></div>
<hr>
<div align="left"> 

The all around modchart helper that contains functions and utilities created by the community.

These scripts are designed to be used with [ReMapper](https://github.com/Swifter1243/ReMapper).
  
Checkout all of the features [here](https://github.com/Nasafrasa/nootils-Remapper-Setup/wiki/Features).

## Installation

Make to already have ReMapper installed in your map folder, if you need help on that, [click here!]()

In your map project folder, run the following in the terminal:

```
deno install --allow-all -f --reload https://raw.githubusercontent.com/Nasafrasa/nootils-Remapper-Setup/main/setup/nootils_setup.ts
```

And then after that to install Nootils into your map folder, run this:
```
nootils_setup
```

After that replace all of the code in `script.ts` with this (unless you already have code, just make sure your on 2.1.0 and you have the import statment for Nootils):

```ts
import { Difficulty } from "https://deno.land/x/remapper@2.1.0/src/mod.ts" // MAKE SURE THIS IS ON THE LATEST REMAPPER VERSION!!!!!!!!!
import { } from "./nootils/index.ts"

const map = new Difficulty("ExpertPlusLawless", "ExpertPlusStandard");

// SCRIPT

map.save();
```
If the import statments have errors, just restart VSCode.


## Usage

You can import all functions Nootils provides by using the following import statement:

```ts
import * as Nootils from "./nootils/index.ts"

Nootils.Rain(0, 20, 300)
```

If you want to use individual functions instead, you can import each function as you need like so:

```ts
import {Rain} from "./nootils/index.ts"

Rain(0, 20, 300)
```

## Contributing
As this package is community ran, we appreciate whoever commits to it.

To commit, you need the following:

- A new function, not already in the package (just update it if it already exists)
- A description of what the function does
- All variables explained one by one and what they do
- Formatted the way other functions are

#

All Nootils functions are documented using JSDoc allowing you to view documentation in an IDE using intellisense:

<div align="center"><img src="https://github.com/StormPacer/nootils/blob/main/intellisense.png?raw=true" /></div>

</div>
