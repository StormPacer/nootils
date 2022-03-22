import {Random} from "../internal/random"

import * as Remapper from 'swifter_remapper'

/**
 * Spawns in walls that resemble rain.
 * @param startingBeat The beat that the rain should start on.
 * @param duration For how many beats the rain should last for.
 * @param amount How many walls should be created per beat.
 * @author StormPacer
 */

export function Rain(startingBeat: number, duration: number, amount: number) {
    for (let i = 0; i < (duration * amount); i++) {
        let x = Random(-40, 40)
        let z = Random(0, 50)

        let wall = new Remapper.Wall(startingBeat + (i / amount), 0.5, 1, 0, 0);

        wall.customData = {
            _color: [0.419, 0.513, 1, 0.1],
            _fake: true,
            _interactable: false,
            _scale: [0.1, 6, 0.1],
            _animation: {
                _dissolve: [[0, 0.1], [1, 0.2], [1, 0.9], [0, 1]],
                _definitePosition: [[x, Random(200, 300), z, 0], [x, Random(-60, -40), z, 1]]
            }
        };

        wall.push();
    }
}