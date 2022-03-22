import * as Remapper from "swifter_remapper";

/**
 * Spawns a wall triangle that you can later animate with AnimateTrack.
 * @param startTime The beat that the triangle should be spawned on.
 * @param endTime The beat that the triangle should disappear.
 * @param track What track the triangle walls should be assigned to.
 * @param x On which X position the triangle should spawn.
 * @param y On which Y position the triangle should spawn.
 * @param z On which Z position the triangle should spawn.
 * @param length How long the triangle walls should be.
 * @author StormPacer
 */

export function Triangle(startTime: number, endTime: number, track: string, x: number, y: number, z: number, length: number) {
    let wall1 = new Remapper.Wall(startTime, endTime - startTime, 0, 1)
    wall1.customData = {
        _scale: [10, 0.1, length],
        _track: track,
        _animation: {
            _definitePosition: [[x, y, z, 0]]
        }
    }
    wall1.push()

    let wall2 = new Remapper.Wall(startTime, endTime - startTime, 0, 1)
    wall2.customData = {
        _scale: [10, 0.1, length],
        _localRotation: [0, 0, -60],
        _track: track,
        _animation: {
            _definitePosition: [[2.39 + x, 4.25 + y, z, 0]]
        }
    }
    wall2.push()

    let wall3 = new Remapper.Wall(startTime, endTime - startTime, 0, 1)
    wall3.customData = {
        _scale: [10, 0.1, length],
        _localRotation: [0, 0, 60],
        _track: track,
        _animation: {
            _definitePosition: [[-2.39 + x, 4.25 + y, z, 0]]
        }
    }
    wall3.push()
}