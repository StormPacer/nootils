import Random from "../internal/random"
import * as Remapper from 'swifter_remapper'

function Fire(startingBeat, duration, fireDuration, size, x, y, z) {
    for (let i = 0; i < (duration * 6); i++) {

        let wall = new Remapper.Wall(startingBeat + (i / 6), fireDuration, 1, 0, 0);
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

export default Fire;
