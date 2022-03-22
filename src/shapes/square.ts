import * as Remapper from "swifter_remapper";

/**
 * Spawns a wall square that you can later animate with AnimateTrack.
 * @param startTime The beat that the square should be spawned on.
 * @param endTime The beat that the square should disappear.
 * @param track What track the square walls should be assigned to.
 * @param x On which X position the square should spawn.
 * @param y On which Y position the square should spawn.
 * @param z On which Z position the square should spawn.
 * @param length How long the square walls should be.
 * @author StormPacer
 */

export function Square(startTime: number, endTime: number, track: string, x: number, y: number, z: number, length: number) {
    let wall1 = new Remapper.Wall(startTime, endTime - startTime, 0, 1)

    wall1.customData = {
        _track: track,
        _scale: [10, 0.1, length],
        _animation: {
            _definitePosition: [[x, y, z, 0]]
        }
    }
    wall1.push()

    let wall2 = new Remapper.Wall(startTime, endTime - startTime, 0, 1)

    wall2.customData = {
        _track: track,
        _scale: [0.1, 10, length],
        _animation: {
            _definitePosition: [[x + 9.8, y, z, 0]]
        }
    }
    wall2.push()

    let wall3 = new Remapper.Wall(startTime, endTime - startTime, 0, 1)

    wall3.customData = {
        _track: track,
        _scale: [0.1, 10, length],
        _animation: {
            _definitePosition: [[x, y, z, 0]]
        }
    }
    wall3.push()

    let wall4 = new Remapper.Wall(startTime, endTime - startTime, 0, 1)

    wall4.customData = {
        _track: track,
        _scale: [10, 0.1, length],
        _animation: {
            _definitePosition: [[x + -0.1, y + 10, z, 0]]
        }
    }
    wall4.push()
}