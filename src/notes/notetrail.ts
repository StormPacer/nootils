import * as Remapper from 'swifter_remapper'
import {Random} from '../internal/random';

enum NoteTrailType {
    BLOCK = "block",
    ARROW = "arrow",
    BOTH = "both",
}

function InternalNoteTrail(filterednotes: Remapper.Note[], length: number = 5, type: NoteTrailType) {
	filterednotes.forEach(note => {
        note.noteGravity = false;
        note.noteLook = false;
        note.spawnEffect = false;
		for (let i = 1; i <= length; i++) {
			let dupe = new Remapper.Note(note.time, note.type, note.direction, note.position);
            dupe.noteGravity = false;
            dupe.noteLook = false;
            dupe.spawnEffect = false;
			dupe.fake = true;
			dupe.animation._position = [[Random(-0.2, 0.2), 0, i * 4, 0.4], [0, 0, 0, 0.7]];
			dupe.animation._localRotation = [[Random(0, 180), Random(0, 180), Random(0, 180), 0], [0, 0, 0, 0.3]];
			if (type.valueOf() == "note" || type.valueOf() == "both") dupe.animation._dissolve = [[0.1, 0], [0, 1, Remapper.EASE.IN_OUT_CUBIC]];
			if (type.valueOf() == "arrow" || type.valueOf() == "both") dupe.animation._dissolveArrow = [[0.1, 0]];
			dupe.push();
		}
	})
}

/**
 * Spawns a trail behind a note - similar to Somewhere Out There
 * @param startBeat The beat to start the effect on.
 * @param endBeat The beat to end the effect on.
 * @param length The length of the trail.
 * @param type What the effect should use for the trail, it can be "arrow" or "block"
 * @author cal117
 */
function NoteTrail(startBeat: number, endBeat: number, length: number = 5, type: NoteTrailType = NoteTrailType.ARROW) {
    const filterednotes = Remapper.activeDiff.notes.filter(note => note.time >= startBeat && note.time <= endBeat);
    InternalNoteTrail(filterednotes, length, type);
}

/**
 * Spawns a trail behind a note - similar to Somewhere Out There
 * @param track The track to apply the effect on.
 * @param length The length of the trail.
 * @param type What the effect should use for the trail, it can be "arrow" or "block"
 * @author cal117
 */
function NoteTrailTrack(track: string, length: number = 5, type: NoteTrailType = NoteTrailType.ARROW) {
    const filterednotes = Remapper.activeDiff.notes.filter(note => {
        if(!note.customData) note.customData = {};
        if(Array.isArray(note.customData._track)) return note.customData._track.includes(track);
        else if (note.customData._track == track) return true;
        else return false;
    });
    InternalNoteTrail(filterednotes, length, type);
}

export {
    NoteTrailType, 
    NoteTrail, 
    NoteTrailTrack
}
