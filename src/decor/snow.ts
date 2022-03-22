import {Random} from "../internal/random"

import * as Remapper from 'swifter_remapper'

/**
 * Spawns in walls that resemble snow.
 * @param startingBeat The beat that the snow should start on.
 * @param duration For how many beats the snow should last for.
 * @param amount How many walls should be created per beat.
 * @author StormPacer
 */

export function Snow(startingBeat: number, duration: number, amount: number) {
    for (let i = 0; i < (duration * amount); i++) {
        let x = Random(-40, 40)
        let z = Random(0, 50)
        let y = Random(60, 80)

        let wall = new Remapper.Wall(startingBeat + (i / amount), 5, 1, 0, 0);

        wall.customData = {
            _color: [1, 1, 1, 4],
            _fake: true,
            _interactable: false,
            _scale: [0.2, 0.2, 0.2],
            _animation: {
                _dissolve: [[0, 0.1], [1, 0.2], [1, 0.9], [0, 1]],
                _definitePosition: [[x, (y = y - 15), z, 0], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.2], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.4], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.6], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.8], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 1]]
            }
        };

        wall.push();
    }
}
