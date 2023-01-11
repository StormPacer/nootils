import * as Remapper from "https://deno.land/x/remapper@3.1.1/src/mod.ts"

/**
 * Changes the border size of the walls between the beats.
 * Works for all kind of walls.
 * @param size The size you want the border to have (1 = default size).
 * @param startTime The beat of the FIRST wall you want to change the border of (will start at the first wall if it is left 'undefined').
 * @param endTime The beat of the LAST wall you want to change the border of (will end at the last wall if it is left 'undefined').
 * @param track Assigns a track to the filtered walls (optional).
 * @author Spidey
 */

function wallBorderSize(size: number = 1, startTime: number = Number.NEGATIVE_INFINITY, endTime: number = Number.POSITIVE_INFINITY, track?: string){
	const filteredwalls = Remapper.activeDiff.walls.filter(w => w.time >= startTime && w.time <= endTime);
	filteredwalls.forEach(wall => {
		if (!wall.customData) wall.customData = {};
		if (!wall.position) wall.position = [wall.lineIndex - 2, wall.type === 0 ? 0 : 1.5];
		if (!wall.scale) wall.scale = [wall.width, wall.type === 0 ? 3.5 : 2];

		wall.position = [wall.position[0] + ((wall.scale[0] - (wall.scale[0] / size)) / 2), wall.position[1]];
		wall.scale = [wall.scale[0] / size, wall.scale[1] / size];
		
		wall.animation._scale = [size, size, 1];

        if (typeof track !== 'undefined') {
            if (!wall.customData) wall.customData = {};
            if (Array.isArray(wall.customData._track)) wall.customData._track.push(track)
            else wall.customData._track = track;
        }
	});
};	


export {wallBorderSize}
