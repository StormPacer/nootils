<div align="center"><img align="center" src="https://github.com/StormPacer/nootils/blob/main/logo.png?raw=true" /></div>
<hr>
<div align="left"> 

The all around modchart helper that contains functions and utilities created by the community.

These scripts are designed to be used with [Remapper](https://github.com/Swifter1243/ReMapper).
  
Checkout examples of all the visible effects in [EXAMPLES.md](EXAMPLES.md)

## Installation

In your map project folder, run the following

```bash
$ npm install nootils
# or if you use yarn
$ yarn add nootils
```

## Usage

Nootils should be used after a map is opened by Remapper, an example can be seen down below:

```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");

// Start of script, insert your script below this line.

Nootils.Rain(0, 20, 300) // This will add the rain effect to the opened map using magic (Remapper.activeDiff)

// End of script, insert your script above this line.

map.save();
```

You can import all functions Nootils provides by using the following import statement:

```ts
import * as Nootils from 'nootils'

Nootils.Rain(0, 20, 300)
```

If you want to use individual functions instead, you can import each function as you need like so:

```ts
import {Rain} from 'nootils'

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
