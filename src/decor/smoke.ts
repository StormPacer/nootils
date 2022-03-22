import {Random} from "../internal/random"

import * as Remapper from 'swifter_remapper'

/**
 * Spawns in walls that resemble smoke
 * @param startingBeat The beat that the smoke should start on.
 * @param duration For how many beats the smoke should last for.
 * @param smokeWallDuration For how many beats each smoke wall should last for.
 * @param size How big the walls should be.
 * @param x The starting X position of the smoke.
 * @param y The starting Y position of the smoke.
 * @param z The starting Z position of the smoke.
 * @author StormPacer
 */

export function Smoke(startingBeat: number, duration: number, smokeWallDuration: number, size: number, x: number, y: number, z: number) {
    for (let i = 0; i < (duration * 6); i++) {

        let wall = new Remapper.Wall(startingBeat + (i / 6), smokeWallDuration, 1, 0, 0);

        wall.customData = {
            _color: [0.1, 0.1, 0.1, 0.1],
            _fake: true,
            _interactable: false,
            _scale: [size, size, size],
            _animation: {
                _dissolve: [[0, 0], [1, 0.1], [1, 0.7], [0, 1]],
                _localRotation: [[Random(0, 180), Random(0, 180), Random(0, 180), 0], [Random(0, 180), Random(0, 180), Random(0, 180), 1]],
                _definitePosition: [[x, y, z, 0, "easeOutCubic"], [(x + Random(-3, 3)), (y + Random(4, 8)), z, 1]]
            }
        };

        wall.push();
    }
}