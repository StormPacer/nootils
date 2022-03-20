import Random from "../InternalFunctions/random"

function Snow(startingBeat, duration, amount) {
    for (let i = 0; i < (duration * amount); i++) {
        let x = Random(-40, 40)
        let z = Random(0, 50)
        let y = Random(60, 80)
        _obstacles.push(
            {
                "_time": (startingBeat + (i / amount)),
                "_lineIndex": 0,
                "_type": 1,
                "_duration": 5,
                "_width": 0,
                "_customData": {
                    _color: [1, 1, 1, 4],
                    _fake: true,
                    _interactable: false,
                    _scale: [0.2, 0.2, 0.2],
                    _animation: {
                        _dissolve: [[0, 0.1], [1, 0.2], [1, 0.9], [0, 1]],
                        _definitePosition: [[x, (y = y - 15), z, 0], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.2], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.4], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.6], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 0.8], [(x + Random(-4, 4)), (y = y - 15), (z + Random(-5, 5)), 1]]
                    }
                }
            }
        )
    }
}