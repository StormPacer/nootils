### Shapes

#### Triangle

Makes a triangle using walls, can be configurable to make 3D prisms ect.
___
**Documentation**:<br />
`startTime`: The beat that the triangle should be spawned on.<br />
`endTime`: The beat that the triangle should disappear.<br />
`track`: What track the triangle walls should be assigned to.<br />
`x`: On which X position the triangle should spawn.<br />
`y`: On which Y position the triangle should spawn.<br />
`z`: On which Z position the triangle should spawn.<br />
`length`: How long the triangle walls should be.<br />

Example:

```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");
// Makes a triangle that lasts 10 beats.

Nootils.Triangle(0, 10, "triangleTrack", 0, 0, 5, 10)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159530249-c357272b-89b1-458f-956c-992cf250f5cf.png">

#### Square

Makes a square using walls, can be configurable to make 3D cubes ect.
___
**Documentation**:<br />
`startTime`: The beat that the square should be spawned on.<br />
`endTime`: The beat that the square should disappear.<br />
`track`: What track the square walls should be assigned to.<br />
`x`: On which X position the square should spawn.<br />
`y`: On which Y position the square should spawn.<br />
`z`: On which Z position the square should spawn.<br />
`length`: How long the square walls should be.<br />

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");

// Makes a square that lasts 10 beats.
Nootils.Square(0, 10, "squareTrack", 0, 0, 5, 10) 

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159530137-c8e20b5e-c1b8-40d5-8028-9623380feed2.png">

#### Circle

Makes a circle using walls, can be configurable to make 3D cylinders ect.
___
**Documentation**:<br />
`startTime`: The beat that the circle should be spawned on.<br />
`endTime`: The beat that the circle should disappear.<br />
`track`: What track the walls should be assigned to.<br />
`radius`: How big the radius of the circle should be.<br />
`amount`: How many walls should be in the circle.<br />
`height`: How tall the walls in the circle should be.<br />
`length`: How long the walls in the circle should be.<br />
`x`: On which X position the circle should spawn.<br />
`y`: On which Y position the circle should spawn.<br />
`z`: On which Z position the circle should spawn.<br />

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'
 
const  map  =  new  Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");

// Makes a circle that lasts 10 beats, with a radius/scale of 5.
Nootils.Circle(0, 10, "circleTrack", 5, 1, 5, 10, 0, 0, 5)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159530354-9f663e60-ea13-4c49-b00d-48b848deeaba.png">

### Notes

#### Ghosty

Makes notes bounce up and down like ghosts - inspired by the notes found in [Ghost Choir mapped by nyri0](https://beatsaver.com/maps/1362d)
___
**Ghosty**:
Applys the Ghosty effect to all notes from `startBeat` to `endBeat`.

 `startBeat`: The beat to start the effect on.
 `endBeat`: The beat to end the effect on.
 `speed`: The speed in how many times it bounces before reaching the player.
 `maxY`: The max Y level the note can reach on negative Y and positive Y
 `easing `:The easing to use.
 `transparent`: Should only the arrow be visible?
 
 **Ghosty Track**:
 Apply's the Ghosty effect to a track.
 This will override any animations already applied to the notes.
 
  `track`: The track to apply the effect to.
 `speed`: The speed in how many times it bounces before reaching the player.
 `maxY`: The max Y level the note can reach on negative Y and positive Y
 `easing`: The easing type.
 `transparent`: Should only the arrow be visible?

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("INPUT.dat", "OUTPUT.dat");

// Apply's Ghosty effect to notes between beat 0 to 10.
Nootils.Ghosty(0, 10, 1, 2, Remapper.EASE.OUT_CUBIC, true)
// Apply's Ghost effect to "ghostyTrack"
Nootils.GhostyTrack("ghostyTrack", 1, 2, Remapper.EASE.OUT_CUBIC, true)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159532156-67c7b428-d692-4631-b08c-8db27c1fb5b0.gif">

#### Note Trail

Makes a trail behind notes.
___
**Note Trail**:
Apply's the Note Trail effect on notes between `startBeat` to `endBeat`

`startBeat`: The beat to start the effect on.
`endBeat`: The beat to end the effect on.
`length `:The length of the trail.
`type`: What the effect should use for the trail, it can be "arrow" or "block"

**Note Trail Track**:
Apply's the Note Trail effect to a track.

`track`: The track to apply the effect on.
`length `: The length of the trail.
`type`: What the effect should use for the trail, it can be "arrow" or "block"

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds a Note Trail effect to notes between beat 0 to 10.
Nootils.NoteTrail(0, 10, 3, Nootils.NoteTrailType.ARROW)
// Adds a Note Trail effect to "noteTrailTrack"
Nootils.NoteTrailTrack("noteTrailTrack", 3, Nootils.NoteTrailType.ARROW)

map.save();
```

<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159541195-31b10f1b-c67f-4fa9-80b0-76238df2b669.gif">

#### Floating Debris
Gives the effect of floating debris when you slice a note.
___
**Documentation**:<br />
`startBeat`: The beat on which the effect should start on.<br />
`endBeat`: The beat to end the effect on.<br />
`duration`: How long the debris will last, defaulted to 2. (optional)<br />
`spread`: How far the debris will go, defaulted to 1. (optional)<br />

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("ExpertPlusLawless.dat");

// Apply's the Floating Debris effect to notes between beat 0 to 10, with a duration of 2, and spread/distance of 1.
Nootils.FloatingDebris(0, 10, 2, 1)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/46404863/160245861-714c8ad6-89e1-404e-9a88-d2ad51e0b5dd.gif">

### Decoration

#### Fire

Self explanatory - spawns fire at a position.
___
**Documentation**:<br />
`startingBeat`: The beat that the fire should start on.<br />
`duration`: For how many beats the fire should last for.<br />
`fireWallDuration`: For how many beats each fire wall should last for.<br />
`size`: How big the walls should be.<br />
`x`: The starting X position of the fire.<br />
`y`: The starting Y position of the fire.<br />
`z`: The starting Z position of the fire.<br />

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("ExpertPlusLawless.dat");

// Spawns a fire at beat 0, that lasts until beat 10, with a size of 5.
Nootils.Fire(0, 10, 2, 5, 0, 0, 5)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159535140-b3210e8e-6e14-47e1-b7ae-d5fc381c2033.gif">

#### Rain

Self explanatory - makes it rain ☔ 
___
**Documentation**:<br />
`startingBeat`: The beat that the rain should start on.<br />
`duration`: For how many beats the rain should last for.<br />
`amount`: How many walls should be created per beat.<br />

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds rain through beat 0 to 10, with an amount of 50.
Nootils.Rain(0, 10, 50)

map.save();
```


<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159537301-b2282d2e-bbdd-4c51-8507-de4831134cee.gif">

#### Smoke

Self explanatory - spawns smoke particles at a position.
___
**Documentation**:<br />
`startingBeat`: The beat that the smoke should start on.<br />
`duration`: For how many beats the smoke should last for.<br />
`smokeWallDuration`: For how many beats each smoke wall should last for.<br />
`size`: How big the walls should be.<br />
`x`: The starting X position of the smoke.<br />
`y`: The starting Y position of the smoke.<br />
`z`: The starting Z position of the smoke.<br />

Example:
```ts
import  *  as  Remapper  from  'swifter_remapper'
import  *  as  Nootils  from  'nootils'

const  map  =  new  Remapper.Difficulty("ExpertPlusLawless.dat");

// Adds smoke through beat 0 to 10, with a size of 5.
Nootils.Smoke(0, 10, 2, 5, 0, 0, 5)

map.save();
```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159532960-b8edac50-4d9b-4784-a0e1-42e4e9647253.gif">

#### Snow

Self explanatory - makes it snow! ❄️ 
___
**Documentation**:<br />
`startingBeat`: The beat that the snow should start on.<br />
`duration`: For how many beats the snow should last for.<br />
`amount`: How many walls should be created per beat.<br />

Example:
```ts

```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159537559-126b5c1e-4575-4783-ad67-6ba00682a541.gif">

#### Water

Spawns a flat base that looks like water.
___
**Documentation**:<br />
`startBeat`: The beat that the water should start on.<br />
`endBeat`: The beat that the water should end on.<br />
`track`: What track the water should be assigned to.<br />
`speed`: How fast the water should move, numbers between 0-5.<br />
`y`: On which Y position the water should spawn.<br />

Example:
```ts

```
<img width="620" height="auto" src="https://user-images.githubusercontent.com/93472213/159539607-9291fa45-5953-495b-89f0-724fd779fda6.png">


#### Floating Pillars
___
**Documentation**:<br />
`startBeat`: The beat that the pillars should start on.<br />
`endBeat`: The beat that the pillars should end on.<br />
`amountPerRow`: The amount of pillars per row.<br />
`spacing`: The distance between the pillars.<br />
`startX`: Where the pillar grid should start on the X axis.<br />
`height`: How tall the pillars should be.<br />
`width`: How wide the pillars should be.<br />
`startZ`: Where the pillar grid should start on the Z axis.<br />
`track`: The track that the pillars should be assigned to.<br />
`R`: The red value for the color of the pillars.<br />
`G`: The green value for the color of the pillars.<br />
`B`: The blue value for the color of the pillars.<br />
`A`: The alpha value for the color of the pillars.<br />

Example:
```ts

```
Spawns in floating pillars on the desired positions and spacing.

https://user-images.githubusercontent.com/93472213/159541412-35bd6f43-504d-4f45-b945-e53354c3e8e9.mp4

<small>Note - this effect was too big to put in a gif - excuse the video for now.</small>
