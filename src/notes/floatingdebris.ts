import * as Remapper from 'swifter_remapper'
import {Random} from '../internal/random';


/**
 * Make notes bounce up and down like ghosts.
 * @param startBeat The beat to startBeat the effect on.
 * @param endBeat The beat to end the effect on.
 * @param Duration How long the debris wil last.
 * @author Pangwen
 */

export function FloatingDebris(startBeat: number, endBeat: number, duration: number) {
    Remapper.notesBetween(startBeat, endBeat, note => {
        let dupe = new Remapper.Note(note.time, note.type, note.direction, note.position);

        dupe.noteGravity = false;
        dupe.noteLook = false;
        dupe.spawnEffect = false;
        dupe.fake = true;
        dupe.interactable = false;

        dupe.animation._dissolveArrow = [[0,0]];
        dupe.animation._definitePosition = [[0,0,0,0],[0,0,0,0.5],[Random(-3,3),Random(-3,3),5,1,"easeOutCubic"]];
        dupe.animation._dissolve = [[0,0],[0,0.5],[0.85,0.501],[0,1,"easeOutCubic"]];
        dupe.animation._localRotation = [[0,0,0,0.5],[Random(-180,180),Random(-180,180),Random(-180,180),1]];

        dupe.NJS = duration;
        
        dupe.push();
    });
};