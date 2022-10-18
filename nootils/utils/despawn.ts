import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

// Swifter made this hard to work with D:
/**
 * @param ID the environment ID to despawn
 * @param lookupmethod the method to find the Environment peice to despawn
 * @author splashcard__ Hi there 
 */
// deno-lint-ignore no-explicit-any
export function despawn(ID: string, lookupmethod: any) { 
    switch(ID) {
        case "bts":
            ID = "BTSEnvironment.[0]Environment"
            break
        case "billie":
            ID = "BillieEnvironment.[0]Environment"
        case "all":
            ID = "Environment"
        case "default":
            ID = "DefaultEnvironment.[0]Environment"
    }

    const env = new rm.Environment(`${ID}`, lookupmethod);
    env.position = [0, -9999, 0];
    env.push();
}
