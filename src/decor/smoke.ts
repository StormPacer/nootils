import Random from "../internal/random"

import * as Remapper from 'swifter_remapper'

function Smoke(startingBeat: number, duration: number, smokeDuration: number, size: number, x: number, y: number, z: number) {
    for (let i = 0; i < (duration * 6); i++) {

        let wall = new Remapper.Wall(startingBeat + (i / 6), smokeDuration, 1, 0, 0);

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

export default Smoke;
