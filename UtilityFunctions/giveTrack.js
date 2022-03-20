let filterednotes
let filteredwalls

function GiveNotesTrack(track, t1, t2) {
	filterednotes = map.notes.filter(n => n._time >= t1 && n._time <= t2)
	filterednotes.forEach(note => {
		if (!note._customData._track) note._customData._track = track
        if (Array.isArray(note._customData._track)) note._customData._track.push(track)
		else if (note._customData._track != track) note._customData._track = [note._customData._track, track]
	})
}

function GiveWallsTrack(track, t1, t2) {
	filteredwalls = _obstacles.filter(o => o._time >= t1 && o._time <= t2)
	filteredwalls.forEach(wall => {
		if (!wall._customData) wall._customData = {};
        if (Array.isArray(wall._customData._track)) wall._customData._track.push(track)
		wall._customData._track = track;
	})
}

function GiveNotesOnLanesTrack(lane1Track, lane2Track, lane3Track, lane4Track, t1, t2) {
    filterednotes = _notes.filter(n => n._time >= t1 && n._time <= t2)
    filterednotes.forEach(note => {
        if (note._lineLayer == 0) {
            if (!note._customData._track) note._customData._track = lane1Track
            if (Array.isArray(note._customData._track)) note._customData._track.push(lane1Track)
            else if (note._customData._track != track) note._customData._track = [note._customData._track, lane1Track]            
        }
        if (note._lineLayer == 1) {
            if (!note._customData._track) note._customData._track = lane2Track
            if (Array.isArray(note._customData._track)) note._customData._track.push(lane2Track)
            else if (note._customData._track != track) note._customData._track = [note._customData._track, lane2Track]            
        }
        if (note._lineLayer == 2) {
            if (!note._customData._track) note._customData._track = lane3Track
            if (Array.isArray(note._customData._track)) note._customData._track.push(lane3Track)
            else if (note._customData._track != track) note._customData._track = [note._customData._track, lane3Track]            
        }
        if (note._lineLayer == 3) {
            if (!note._customData._track) note._customData._track = lane4Track
            if (Array.isArray(note._customData._track)) note._customData._track.push(lane4Track)
            else if (note._customData._track != track) note._customData._track = [note._customData._track, lane4Track]            
        }
    })
}

function GiveTypeNotesTrack(type0Track, type1Track, t1, t2) {
    filterednotes = _notes.filter(n => n._time >= t1 && n._time <= t2)
    filterednotes.forEach(note => {
        if (note._type == 0) {
            if (!note._customData._track) note._customData._track = type0Track
            if (Array.isArray(note._customData._track)) note._customData._track.push(type0Track)
            else if (note._customData._track != track) note._customData._track = [note._customData._track, type0Track]    
        }
        if (note._type == 1) {
            if (!note._customData._track) note._customData._track = type1Track
            if (Array.isArray(note._customData._track)) note._customData._track.push(type1Track)
            else if (note._customData._track != track) note._customData._track = [note._customData._track, type1Track]    
        }
    })
}

export default {GiveNotesTrack, GiveWallsTrack, GiveTypeNotesTrack, GiveNotesOnLanesTrack}