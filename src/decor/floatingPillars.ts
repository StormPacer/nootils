import {Random} from "../internal/random"

import * as Remapper from 'swifter_remapper'

/**
 * Spawns in floating pillars on the desired positions and spacing.
 * @param startBeat The beat that the pillars should start on.
 * @param endBeat The beat that the pillars should end on.
 * @param amountPerRow The amount of pillars per row.
 * @param spacing The distance between the pillars.
 * @param startX Where the pillar grid should start on the X axis.
 * @param height How tall the pillars should be.
 * @param width How wide the pillars should be.
 * @param startZ Where the pillar grid should start on the Z axis.
 * @param track The track that the pillars should be assigned to.
 * @param R The red value for the color of the pillars.
 * @param G The green value for the color of the pillars.
 * @param B The blue value for the color of the pillars.
 * @param A The alpha value for the color of the pillars.
 * @author StormPacer
 */

export function FloatingPillars(startBeat: number, endBeat: number, amountPerRow: number, spacing: number, startX: number, height: number, width: number, startZ: number, track: string, R: number, G: number, B: number, A: number) {
    let z = startZ
    for (let i = 0; i <= amountPerRow; i++) {
        if (z <= spacing * amountPerRow) {
            z += spacing
            let x = startX
            for (let i = 0; i <= amountPerRow; i++) {
                if (x <= spacing * amountPerRow) {
                    x += spacing

                    let wall = new Remapper.Wall(startBeat, endBeat - startBeat, 1, 0, 0);

                    wall.customData = {
                        _track: track,
                        _color: [R, G, B, A],
                        _fake: true,
                        _interactable: false,
                        _scale: [width, height, width],
                        _animation: {
                            _definitePosition: [[x, Random(5, 30), z, 0, "easeInOutCubic"], [x, Random(5, 30), z, 0.2, "easeInOutCubic"], [x, Random(5, 30), z, 0.4, "easeInOutCubic"], [x, Random(5, 30), z, 0.6, "easeInOutCubic"], [x, Random(5, 30), z, 0.8, "easeInOutCubic"], [x, Random(5, 30), z, 1, "easeInOutCubic"]]
                        }
                    };

                    wall.push();
                }
            }
        }
    }
}
