import * as Remapper from 'swifter_remapper'

function InternalGhosty(filteredNotes: Remapper.Note[], speed: number, maxY: number, easing: Remapper.EASE = Remapper.EASE.IN_OUT_CUBIC, transparent?: boolean) {
    const positions: any = [[0, 0, 0, 0]];
    let positive = false;
    for (let i = speed + 1; i > 0; i--) {
        let pos = positive ? [0, maxY, 0, 0.35 / i, easing] : [0, -maxY, 0, 0.35 / i, easing];
        positions.push(pos);
        positive = !positive;
    }
    positions.push([0, 0, 0, 0.4, easing]);
    filteredNotes.forEach(note => {
        note.animation = {
            _dissolve: [
                transparent ? [0, 0] : [1, 0],
            ],
            _dissolveArrow: [
                [0, 0],
                [1, 0.05],
            ],
            _position: positions,
        }
    });
}

/**
 * Make notes bounce up and down like ghosts.
 * This will override any animations already applied to the notes.
 * @param track The track to apply the effect to.
 * @param speed The speed in how many times it bounces before reaching the player.
 * @param maxY The max Y level the note can reach on negative Y and positive Y
 * @param easing The easing type.
 * @param transparent Should only the arrow be visible?
 * @author cal117
 */
function GhostyTrack(track: string, speed: number, maxY: number, easing: Remapper.EASE = Remapper.EASE.IN_OUT_CUBIC, transparent?: boolean) {
    const filteredNotes = Remapper.activeDiff.notes.filter(note => {
        if(!note.customData) note.customData = {};
        if(Array.isArray(note.customData._track)) return note.customData._track.includes(track);
        else if (note.customData._track == track) return true;
        else return false;
    });
    InternalGhosty(filteredNotes, speed, maxY, easing, transparent);
}

/**
 * Make notes bounce up and down like ghosts.
 * @param startBeat The beat to start the effect on.
 * @param endBeat The beat to end the effect on.
 * @param speed The speed in how many times it bounces before reaching the player.
 * @param maxY The max Y level the note can reach on negative Y and positive Y
 * @param easing The easing to use.
 * @param transparent Should only the arrow be visible?
 * @author cal117
 */
function Ghosty(startBeat: number, endBeat: number, speed: number, maxY: number, easing: Remapper.EASE = Remapper.EASE.IN_OUT_CUBIC, transparent?: boolean) {
    const filteredNotes = Remapper.activeDiff.notes.filter(n => n.time >= startBeat && n.time <= endBeat);
    InternalGhosty(filteredNotes, speed, maxY, easing, transparent);
}

export {
    GhostyTrack, Ghosty
};
