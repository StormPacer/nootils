import {Random} from "../internal/random"

import * as Remapper from 'swifter_remapper'

/**
 * Spawns in walls that resemble a fire.
 * @param startingBeat The beat that the fire should start on.
 * @param duration For how many beats the fire should last for.
 * @param fireWallDuration For how many beats each fire wall should last for.
 * @param size How big the walls should be.
 * @param x The starting X position of the fire.
 * @param y The starting Y position of the fire.
 * @param z The starting Z position of the fire.
 * @author StormPacer
 */

export function Fire(startingBeat: number, duration: number, fireWallDuration: number, size: number, x: number, y: number, z: number) {
    for (let i = 0; i < (duration * 6); i++) {

        let wall = new Remapper.Wall(startingBeat + (i / 6), fireWallDuration, 1, 0, 0);
        wall.customData = {
            _fake: true,
            _interactable: false,
            _scale: [size, size, size],
            _animation: {
                _dissolve: [[0, 0], [1, 0.1], [1, 0.7], [0, 1]],
                _color: [[1, 0, 0, 0.5, 0], [0.996, 1, 0.239, 0.5, 1]],
                _localRotation: [[Random(0, 180), Random(0, 180), Random(0, 180), 0], [Random(0, 180), Random(0, 180), Random(0, 180), 1]],
                _definitePosition: [[x, y, z, 0, "easeOutCubic"], [(x + Random(-2, 2)), (y + Random(3, 5)), z, 1]]
            }
        };

        wall.push();
    }
}
