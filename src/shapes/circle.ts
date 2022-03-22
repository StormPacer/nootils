import * as Remapper from "swifter_remapper"

/**
 * Spawns a wall circle that you can later animate with AnimateTrack, adapted from Reddek's function.
 * @param startTime The beat that the circle should be spawned on.
 * @param endTime The beat that the circle should disappear.
 * @param track What track the walls should be assigned to.
 * @param radius How big the radius of the circle should be.
 * @param amount How many walls should be in the circle.
 * @param height How tall the walls in the circle should be.
 * @param length How long the walls in the circle should be.
 * @param x On which X position the circle should spawn.
 * @param y On which Y position the circle should spawn.
 * @param z On which Z position the circle should spawn.
 * @author StormPacer
 */

export function Circle(startTime: number, endTime: number, track: string, radius: number, amount: number, height: number, length: number, x: number, y: number, z: number) {
    for (let i = 0; i < amount; i++) {
        let wall = new Remapper.Wall(startTime, endTime - startTime, 0, 0, 0)

        let angle = Math.PI * 2 / amount;
        let rot = 360 / amount * i;
        let radians = angle * i
        let width = 2 * radius * Math.tan(Math.PI / amount);
        let sx = x + Math.cos(radians) * radius - width / 2;
        let sy = y + Math.sin(radians) * radius - height / 2;

        wall.customData = {
            _interactable: false,
            _track: track,
            _scale: [width, height, length],
            _rotation: [0, 0, 0],
            _localRotation: [0, 0, 90 + rot],
            _position: [sx, sy, 0],
            _animation: {
                _definitePosition: [[0, 0, z, 0]]
            }
        }
        wall.push()
    }
}