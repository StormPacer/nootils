
### Shapes

#### Triangle

Makes a triangle using walls, can be configurable to make 3D prisms ect.

**Documentation**:
- `startTime`: The beat that the triangle should be spawned on.
- `endTime`: The beat that the triangle should disappear.
- `track`: What track the triangle walls should be assigned to.
- `x`: On which X position the triangle should spawn.
- `y`: On which Y position the triangle should spawn.
- `z`: On which Z position the triangle should spawn.
- `length`: How long the triangle walls should be.

Example:

```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");
// Makes a triangle that lasts 10 beats.

Nootils.Triangle(0, 10, "triangleTrack", 0, 0, 5, 10)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159530249-c357272b-89b1-458f-956c-992cf250f5cf.png">

#### Square

Makes a square using walls, can be configurable to make 3D cubes ect.

**Documentation**:
- `startTime`: The beat that the square should be spawned on.
- `endTime`: The beat that the square should disappear.
- `track`: What track the square walls should be assigned to.
- `x`: On which X position the square should spawn.
- `y`: On which Y position the square should spawn.
- `z`: On which Z position the square should spawn.
- `length`: How long the square walls should be.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");

// Makes a square that lasts 10 beats.
Nootils.Square(0, 10, "squareTrack", 0, 0, 5, 10) 

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159530137-c8e20b5e-c1b8-40d5-8028-9623380feed2.png">

#### Circle

Makes a circle using walls, can be configurable to make 3D cylinders ect.

**Documentation**:
- `startTime`: The beat that the circle should be spawned on.
- `endTime`: The beat that the circle should disappear.
- `track`: What track the walls should be assigned to.
- `radius`: How big the radius of the circle should be.
- `amount`: How many walls should be in the circle.
- `height`: How tall the walls in the circle should be.
- `length`: How long the walls in the circle should be.
- `x`: On which X position the circle should spawn.
- `y`: On which Y position the circle should spawn.
- `z`: On which Z position the circle should spawn.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'
 
const map = new Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");

// Makes a circle that lasts 10 beats, with a radius/scale of 5.
Nootils.Circle(0, 10, "circleTrack", 5, 1, 5, 10, 0, 0, 5)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159530354-9f663e60-ea13-4c49-b00d-48b848deeaba.png">

### Notes

#### Ghosty

Makes notes bounce up and down like ghosts - inspired by the notes found in [Ghost Choir mapped by nyri0](https://beatsaver.com/maps/1362d)

**Ghosty**:<br />
Applys the Ghosty effect to all notes from `startBeat` to `endBeat`.

- `startBeat`: The beat to start the effect on.
- `endBeat`: The beat to end the effect on.
- `speed`: The speed in how many times it bounces before reaching the player.
- `maxY`: The max Y level the note can reach on negative Y and positive Y
- `easing `:The easing to use.
- `transparent`: Should only the arrow be visible?
 
 **Ghosty Track**:<br />
 Apply's the Ghosty effect to a track.<br />
 This will override any animations already applied to the notes.
 
-  `track`: The track to apply the effect to.
- `speed`: The speed in how many times it bounces before reaching the player.
- `maxY`: The max Y level the note can reach on negative Y and positive Y
- `easing`: The easing type.
- `transparent`: Should only the arrow be visible?

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");

// Apply's Ghosty effect to notes between beat 0 to 10.
Nootils.Ghosty(0, 10, 1, 2, Remapper.EASE.OUT_CUBIC, true)
// Apply's Ghost effect to "ghostyTrack"
Nootils.GhostyTrack("ghostyTrack", 1, 2, Remapper.EASE.OUT_CUBIC, true)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159532156-67c7b428-d692-4631-b08c-8db27c1fb5b0.gif">

#### Note Trail

Makes a trail behind notes.

**Note Trail**:<br />
Apply's the Note Trail effect on notes between `startBeat` to `endBeat`

- `startBeat`: The beat to start the effect on.
- `endBeat`: The beat to end the effect on.
- `length `:The length of the trail.
- `type`: What the effect should use for the trail, it can be "arrow" or "block"

**Note Trail Track**:<br />
Apply's the Note Trail effect to a track.

- `track`: The track to apply the effect on.
- `length `: The length of the trail.
- `type`: What the effect should use for the trail, it can be "arrow" or "block"

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds a Note Trail effect to notes between beat 0 to 10.
Nootils.NoteTrail(0, 10, 3, Nootils.NoteTrailType.ARROW)
// Adds a Note Trail effect to "noteTrailTrack"
Nootils.NoteTrailTrack("noteTrailTrack", 3, Nootils.NoteTrailType.ARROW)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159541195-31b10f1b-c67f-4fa9-80b0-76238df2b669.gif">

#### Floating Debris
Gives the effect of floating debris when you slice a note.

**Documentation**:
- `startBeat`: The beat on which the effect should start on.
- `endBeat`: The beat to end the effect on.
- `duration`: How long the debris will last, defaulted to 2. (optional)
- `spread`: How far the debris will go, defaulted to 1. (optional)

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Apply's the Floating Debris effect to notes between beat 0 to 10, with a duration of 2, and spread/distance of 1.
Nootils.FloatingDebris(0, 10, 2, 1)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/46404863/160245861-714c8ad6-89e1-404e-9a88-d2ad51e0b5dd.gif">

### Decoration

#### Fire

Self explanatory - spawns fire at a position.

**Documentation**:
- `startingBeat`: The beat that the fire should start on.
- `duration`: For how many beats the fire should last for.
- `fireWallDuration`: For how many beats each fire wall should last for.
- `size`: How big the walls should be.
- `x`: The starting X position of the fire.
- `y`: The starting Y position of the fire.
- `z`: The starting Z position of the fire.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Spawns a fire at beat 0, that lasts until beat 10, with a size of 5.
Nootils.Fire(0, 10, 2, 5, 0, 0, 5)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159535140-b3210e8e-6e14-47e1-b7ae-d5fc381c2033.gif">

#### Rain

Self explanatory - makes it rain ☔ 

**Documentation**:
- `startingBeat`: The beat that the rain should start on.
- `duration`: For how many beats the rain should last for.
- `amount`: How many walls should be created per beat.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds rain through beat 0 to 10, with an amount of 50.
Nootils.Rain(0, 10, 50)

map.save();
```


<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159537301-b2282d2e-bbdd-4c51-8507-de4831134cee.gif">

#### Smoke

Self explanatory - spawns smoke particles at a position.

**Documentation**:
- `startingBeat`: The beat that the smoke should start on.
- `duration`: For how many beats the smoke should last for.
- `smokeWallDuration`: For how many beats each smoke wall should last for.
- `size`: How big the walls should be.
- `x`: The starting X position of the smoke.
- `y`: The starting Y position of the smoke.
- `z`: The starting Z position of the smoke.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds smoke through beat 0 to 10, with a size of 5.
Nootils.Smoke(0, 10, 2, 5, 0, 0, 5)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159532960-b8edac50-4d9b-4784-a0e1-42e4e9647253.gif">

#### Snow

Self explanatory - makes it snow! ❄️ 

**Documentation**:
- `startingBeat`: The beat that the snow should start on.
- `duration`: For how many beats the snow should last for.
- `amount`: How many walls should be created per beat.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds snow between beats 0 to 10, with an amount of 50.
Nootils.Snow(0, 10, 50)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159537559-126b5c1e-4575-4783-ad67-6ba00682a541.gif">

#### Water

Spawns a flat base that looks like water.

**Documentation**:
- `startBeat`: The beat that the water should start on.
- `endBeat`: The beat that the water should end on.
- `track`: What track the water should be assigned to.
- `speed`: How fast the water should move, numbers between 0-5.
- `y`: On which Y position the water should spawn.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds water between beats 0 to 10, on the track "waterTrack", with a speed of 1 and a Y value of 0.
Nootils.Water(0, 10, "waterTrack", 1, 0)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159539607-9291fa45-5953-495b-89f0-724fd779fda6.png">


#### Floating Pillars
**Documentation**:
- `startBeat`: The beat that the pillars should start on.
- `endBeat`: The beat that the pillars should end on.
- `amountPerRow`: The amount of pillars per row.
- `spacing`: The distance between the pillars.
- `startX`: Where the pillar grid should start on the X axis.
- `height`: How tall the pillars should be.
- `width`: How wide the pillars should be.
- `startZ`: Where the pillar grid should start on the Z axis.
- `track`: The track that the pillars should be assigned to.
- `R`: The red value for the color of the pillars.
- `G`: The green value for the color of the pillars.
- `B`: The blue value for the color of the pillars.
- `A`: The alpha value for the color of the pillars.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");

// Add's floating pillars between beats 0 and 10. Theres alot of parameters in this effect, so I suggest you mess around with on your own.
Nootils.FloatingPillars(0, 10, 10, 1, 0, 10, 10, 0, "pillarsTrack", 1, 1, 1, 1)

map.save();
```
Spawns in floating pillars on the desired positions and spacing.

https://user-images.githubusercontent.com/93472213/159541412-35bd6f43-504d-4f45-b945-e53354c3e8e9.mp4

<small>Note - this effect was too big to put in a gif - excuse the video for now.</small>

#### Change Wall Border
Changes the size of a wall border.

**Documentation**:
- `size`: The size you want the border to have (1 = diffault size).
- `startTime`: The beat of the FIRST wall you want to change the border of (will start at the first wall if it is left 'undefined').
- `endTime`: The beat of the LAST wall you want to change the border of (will end at the last wall if it is left 'undefined').
- `track`: Assigns a track to the filtered walls (optional).

Example:
```ts
import * as Remapper from 'swifter_remapper'

const map = new Remapper.Difficulty("EasyStandard.dat", "ExpertPlusStandard.dat");

wallBorderSize(0.1, 2, 3);
wallBorderSize(5, 4, 5);

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/76397825/164314851-7a86ec3b-c415-4a87-a936-8e1f41563eee.gif">

### Utility
#### Give Track
Gives a track to selected objects.

**Give Notes Track**:<br />
Gives the notes between desired beats a track.

- `track`: The track you want the notes to have.
- `t1`: From which beat it should start assigning the track.
- `t2`: To which beat it should assign the tracks to.
 
**Give Walls Track**:<br />
Gives the walls between desired beats a track.
- `track`: The track you want the walls to have.
- `t1`: From which beat it should start assigning the track.
- `t2`: To which beat it should assign the tracks to.

**Give Notes On Lane Track**:<br />
Gives the notes between desired beats a track. Separates by lanes
- `lane1Track`: The track you want the notes on lane 1 to have.
- `lane2Track`: The track you want the notes on lane 2 to have.
- `lane3Track`: The track you want the notes on lane 3 to have.
- `lane4Track`: The track you want the notes on lane 4 to have.
- `t1`: From which beat it should start assigning the track.
- `t2`: To which beat it should assign the tracks to.

**Give Type Notes Track**:<br />
Gives the notes between desired beats a track. Separates by type
- `type0Track`: The track you want the left notes to have.
- `type1Track`: The track you want the right notes to have.
- `t1`: From which beat it should start assigning the track.
- `t2`: To which beat it should assign the tracks to.

Example:
```ts
import * as Remapper from 'swifter_remapper'
import * as Nootils from 'nootils'

const map = new Remapper.Difficulty("ExpertPlusLawless.dat");
 
// Gives all notes between beat 0 to 10, the track "noteTrack"
Nootils.GiveNotesTrack("noteTrack", 0, 10)
// Gives all walls between beat 0 to 10, the track "wallTrack"
Nootils.GiveWallsTrack("wallTrack", 0, 10)
// Gives all notes between 0 and 10 there corresponding track based off of their lane.
Nootils.GiveNotesOnLanesTrack("line1Track", "line2Track", "line3Track", "line4Track", 0, 10)
// Gives all notes between 0 and 10 there corresponding track based off of their type/color.
Nootils.GiveTypeNotesTrack("type0Track", "type1Track", 0, 10)

map.save();
```
