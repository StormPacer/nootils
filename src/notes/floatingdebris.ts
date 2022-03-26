import * as Remapper from 'swifter_remapper'
import {Random} from '../internal/random';


/**
 * Gives the effect of floating debris when you slice a note.
 * @param startBeat The beat on which the effect should start on.
 * @param endBeat The beat to end the effect on.
 * @param duration How long the debris will last, defaulted to 2.
 * @param spread How far the debris will go, defaulted to 1.
 * @author Pangwen
 */

export function FloatingDebris(startBeat: number,  endBeat: number,  duration: number = 2, spread: number = 1) {
    Remapper.notesBetween(startBeat,  endBeat,  note => {
        if (note.type != Remapper.NOTE.BOMB) {
            let dupe = new Remapper.Note(note.time,  note.type,  note.direction,  note.position);

            dupe.noteGravity = false;
            dupe.noteLook = false;
            dupe.spawnEffect = false;
            dupe.fake = true;
            dupe.interactable = false;
            dupe.offset = duration;

            dupe.animation._dissolveArrow = [[0, 0]];
            dupe.animation._dissolve = [[0, 0], [0, 0.5], [0.85, 0.501], [0, 1, "easeOutCubic"]];
            dupe.animation._localRotation = [[0, 0, 0, 0.5], [Random(-180, 180), Random(-180, 180), Random(-180, 180), 1]];
            if (note.direction == Remapper.NOTE.UP) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [0*spread, 3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == Remapper.NOTE.DOWN) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [0*spread, -3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == Remapper.NOTE.LEFT) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [-3*spread, 0, 5, 1, "easeOutCubic"]];
            } else if (note.direction == Remapper.NOTE.RIGHT) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [3*spread, 0, 5, 1, "easeOutCubic"]];
            } else if (note.direction == Remapper.NOTE.UP_LEFT) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [-3*spread, 3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == Remapper.NOTE.UP_RIGHT) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [3*spread, 3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == Remapper.NOTE.DOWN_LEFT) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [-3*spread, -3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == Remapper.NOTE.DOWN_RIGHT) {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [3*spread, -3, 5, 1, "easeOutCubic"]];
            } else {
                dupe.animation._definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [Random(-3, 3), Random(-3, 3), 5, 1, "easeOutCubic"]];
            }
        
            dupe.push();
        }
        
    });
};

// supermemer is a furry
