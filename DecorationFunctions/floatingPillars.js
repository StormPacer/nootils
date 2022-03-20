import Random from "../InternalFunctions/random"

/**
 * 
 * @param {number} startBeat The beat that the pillars should start on.
 * @param {number} endBeat The beat that the pillars should end on.
 * @param {number} amountPerRow The amount of pillars per row.
 * @param {number} spacing The distance between the pillars.
 * @param {number} startX Where the pillar grid should start on the X axis.
 * @param {number} endX Where the pillar grid should stop on the X axis.
 * @param {number} height How tall the pillars should be.
 * @param {number} width How wide the pillars should be.
 * @param {number} startZ Where the pillar grid should start on the Z axis.
 * @param {number} endZ Where the pillar grid should end on the Z axis.
 * @param {number} track The track that the pillars should be assigned to.
 * @param {number} R The red value for the color of the pillars.
 * @param {number} G The green value for the color of the pillars.
 * @param {number} B The blue value for the color of the pillars.
 * @param {number} A The alpha value for the color of the pillars.
 */

function floatingPillars(startBeat, endBeat, amountPerRow, spacing, startX, endX, height, width, startZ, endZ, track, R, G, B, A) {
    let z = startZ
    let stopZ = endZ
    for (let i = 0; i <= amountPerRow; i++) {
        if (z <= stopZ) {
            z += spacing
            let x = startX
            let stopX = endX
            for (let i = 0; i <= amountPerRow; i++) {
                if (x <= stopX) {
                    x += spacing
                    _obstacles.push(
                        {
                            "_time": startBeat,
                            "_lineIndex": 0,
                            "_type": 1,
                            "_duration": endBeat - startBeat,
                            "_width": 0,
                            "_customData": {
                                _track: track,
                                _color: [R, G, B, A],
                                _fake: true,
                                _interactable: false,
                                _scale: [width, height, width],
                                _animation: {
                                    _definitePosition: [[x, Random(5, 30), z, 0, "easeInOutCubic"], [x, Random(5, 30), z, 0.2, "easeInOutCubic"], [x, Random(5, 30), z, 0.4, "easeInOutCubic"], [x, Random(5, 30), z, 0.6, "easeInOutCubic"], [x, Random(5, 30), z, 0.8, "easeInOutCubic"], [x, Random(5, 30), z, 1, "easeInOutCubic"]]
                                }
                            }
                        }
                    )
                }
            }
        }
    }
}

export default floatingPillars