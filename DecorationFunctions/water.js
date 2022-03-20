/**
 * 
 * @param {number} startBeat The beat that the water should start on.
 * @param {number} endBeat The beat that the water should end on.
 * @param {number} speed How fast the water should move, numbers between 0-5.
 * @param {number} track What track the water should be assigned to.
 * @returns 
 */

function Water(startBeat, endBeat, speed, track) {
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
    _obstacles.push(
        {
            "_time": startBeat,
            "_lineIndex": 0,
            "_type": 1,
            "_duration": endBeat,
            "_width": 0,
            "_customData": {
                _track: track,
                _color: [0, 1.5, 2, 10],
                _fake: true,
                _interactable: false,
                _scale: [2000, 0.5, 2000],
                _animation: {
                    _definitePosition: [[-1000, 302.5, -1000, 0], [-1000, 302.5, z, 1]]
                }
            }
        }
    )
}

export default Water