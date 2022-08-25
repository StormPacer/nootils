import { Difficulty } from "https://deno.land/x/remapper@2.0.2/src/mod.ts" // Keep on 2.0.2 for now
import {  } from "./nootils/index.ts"; // Import nootil classes here!

const map = new Difficulty("ExpertPlusLawless.dat", "ExpertPlusStandard.dat");

// SCRIPT

map.save();
