import * as Remapper from 'swifter_remapper'
import Random from '../internal/random';

function InternalNoteTrail(filterednotes: Remapper.Note[], length: number = 5) {
	filterednotes.forEach(note => {
		for (let i = 1; i < length; i++) {
			let dupe = new Remapper.Note(note.time, note.type, note.direction);
			dupe.fake = true;
			dupe.animation._position = [[Random(-0.2, 0.2), 0, i * 2, 0], [0, 0, 0, 0.3]];
			dupe.animation._localRotation = [[Random(0, 180), Random(0, 180), Random(0, 180), 0], [0, 0, 0, 0.3]];
			dupe.animation._dissolve = [[0.1, 0], [0, 1, Remapper.EASE.IN_OUT_BOUNCE]];
			dupe.animation._dissolveArrow = [[0.1, 0], [0, 1, Remapper.EASE.IN_OUT_BOUNCE]];
			dupe.push();
		}
	})
}

function NoteTrail(startBeat: number, endBeat: number, length: number = 5) {
    const filterednotes = Remapper.activeDiff.notes.filter(note => note.time >= startBeat && note.time <= endBeat);
    InternalNoteTrail(filterednotes, length);
}

function NoteTrailTrack(track: string, length: number = 5) {
    const filterednotes = Remapper.activeDiff.notes.filter(note => {
        if(!note.customData) note.customData = {};
        if(Array.isArray(note.customData._track)) return note.customData._track.includes(track);
        else if (note.customData._track == track) return true;
        else return false;
    });
}

export default {NoteTrail, NoteTrailTrack}