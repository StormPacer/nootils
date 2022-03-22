import * as Remapper from 'swifter_remapper'

/**
 * Gives the notes between desired beats a track.
 * @param track The track you want the notes to have.
 * @param t1 From which beat it should start assigning the track.
 * @param t2 To which beat it should assign the tracks to.
 * @author StormPacer
 */

function GiveNotesTrack(track: string, t1: number, t2: number) {
    const filterednotes = Remapper.activeDiff.notes.filter(n => n.time >= t1 && n.time <= t2)
    filterednotes.forEach(note => {
        if (!note.customData._track) note.customData._track = track
        if (Array.isArray(note.customData._track)) note.customData._track.push(track)
        else if (note.customData._track != track) note.customData._track = [note.customData._track, track]
    });
}

/**
 * Gives the walls between desired beats a track.
 * @param track The track you want the walls to have.
 * @param t1 From which beat it should start assigning the track.
 * @param t2 To which beat it should assign the tracks to.
 * @author StormPacer 
 */

function GiveWallsTrack(track: string, t1: number, t2: number) {
    const filteredwalls = Remapper.activeDiff.obstacles.filter(o => o.time >= t1 && o.time <= t2)
    filteredwalls.forEach(wall => {
        if (!wall.customData) wall.customData = {};
        if (Array.isArray(wall.customData._track)) wall.customData._track.push(track)
        else wall.customData._track = track;
    })
}

/**
 * Gives the notes between desired beats a track. Separates by lanes
 * @param lane1Track The track you want the notes on lane 1 to have.
 * @param lane2Track The track you want the notes on lane 2 to have.
 * @param lane3Track The track you want the notes on lane 3 to have.
 * @param lane4Track The track you want the notes on lane 4 to have.
 * @param t1 From which beat it should start assigning the track.
 * @param t2 To which beat it should assign the tracks to.
 * @author StormPacer
 */

function GiveNotesOnLanesTrack(lane1Track: string, lane2Track: string, lane3Track: string, lane4Track: string, t1: number, t2: number) {
    const filterednotes = Remapper.activeDiff.notes.filter(n => n.time >= t1 && n.time <= t2)
    filterednotes.forEach(note => {
        if (note.json._lineLayer == 0) {
            if (!note.customData._track) note.customData._track = lane1Track
            if (Array.isArray(note.customData._track)) note.customData._track.push(lane1Track)
            else if (note.customData._track != lane1Track) note.customData._track = [note.customData._track, lane1Track]
        }
        if (note.json._lineLayer == 1) {
            if (!note.customData._track) note.customData._track = lane2Track
            if (Array.isArray(note.customData._track)) note.customData._track.push(lane2Track)
            else if (note.customData._track != lane2Track) note.customData._track = [note.customData._track, lane2Track]
        }
        if (note.json._lineLayer == 2) {
            if (!note.customData._track) note.customData._track = lane3Track
            if (Array.isArray(note.customData._track)) note.customData._track.push(lane3Track)
            else if (note.customData._track != lane3Track) note.customData._track = [note.customData._track, lane3Track]
        }
        if (note.json._lineLayer == 3) {
            if (!note.customData._track) note.customData._track = lane4Track
            if (Array.isArray(note.customData._track)) note.customData._track.push(lane4Track)
            else if (note.customData._track != lane4Track) note.customData._track = [note.customData._track, lane4Track]
        }
    })
}

/**
 * Gives the notes between desired beats a track. Separates by type
 * @param type0Track The track you want the left notes to have.
 * @param type1Track The track you want the right notes to have.
 * @param t1 From which beat it should start assigning the track.
 * @param t2 To which beat it should assign the tracks to.
 * @author StormPacer 
 */

function GiveTypeNotesTrack(type0Track: string, type1Track: string, t1: number, t2: number) {
    const filterednotes = Remapper.activeDiff.notes.filter(n => n.time >= t1 && n.time <= t2)
    filterednotes.forEach(note => {
        if (note.type == 0) {
            if (!note.customData._track) note.customData._track = type0Track
            if (Array.isArray(note.customData._track)) note.customData._track.push(type0Track)
            else if (note.customData._track != type0Track) note.customData._track = [note.customData._track, type0Track]
        }
        if (note.type == 1) {
            if (!note.customData._track) note.customData._track = type1Track
            if (Array.isArray(note.customData._track)) note.customData._track.push(type1Track)
            else if (note.customData._track != type0Track) note.customData._track = [note.customData._track, type1Track]
        }
    })
}

export {GiveNotesTrack, GiveWallsTrack, GiveTypeNotesTrack, GiveNotesOnLanesTrack}
