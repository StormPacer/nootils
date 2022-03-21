import * as Remapper from 'swifter_remapper'

/**
 *
 * @param startBeat The beat that the water should start on.
 * @param endBeat The beat that the water should end on.
 * @param speed How fast the water should move, numbers between 0-5.
 * @param track What track the water should be assigned to.
 */
function Water(startBeat: number, endBeat: number, speed: number, track: string) {
    let z = 0
    switch(speed) {
        case 0:
            return z = -1000
        case 1:
            return z = -1100
        case 2:
            return z = -1200
        case 3:
            return z = -1300
        case 4:
            return z = -1400
        case 5:
            return z = -1500
    }

    let wall = new Remapper.Wall(startBeat, endBeat, 1, 0, 0);

    wall.customData = {
        _track: track,
        _color: [0, 1.5, 2, 10],
        _fake: true,
        _interactable: false,
        _scale: [2000, 0.5, 2000],
        _animation: {
            _definitePosition: [[-1000, 302.5, -1000, 0], [-1000, 302.5, z, 1]]
        }
    };

    wall.push();
}

export default Water;
