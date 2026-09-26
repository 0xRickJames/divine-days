# Divine Days — Game Design

## Product

Divine Days is an illustrated, mobile-first, turn-based browser RPG. Navigation moves through images and location screens rather than a freely walking sprite. React renders the interface; a pure TypeScript rules layer will handle combat and progression; MongoDB Atlas will store authenticated player saves.

## Character paths

| Path | Focus | Building function | Specialty |
| --- | --- | --- | --- |
| Paladin | Defense | Armor and defensive training | Armor one tier early |
| Barbarian | Offense | Weapons and offensive training | Weapons one tier early |
| Rogue | Finesse | Skills and finesse training | Skills one tier early |
| Mage | Intelligence | Spells and magical training | Spells one tier early |

Core attributes are Attack, Defense, Finesse, and Intelligence. Class selection happens through ceremonies in Shireville. The exact respec and mastery rules remain open for balancing.

## Location loop

World Map → Realm → Building → Shop / Training / Ceremony / Challenge → Rewards and progression.

Each class building combines the shop, academy, ceremony, and class-themed challenge. There are no separate generic shop or academy buildings.

## Combat

Combat will be turn-based and information-rich while remaining touch friendly. The intended first version includes a basic attack, equipped active abilities, an item action, status effects, enemy intent, health/resources, and a compact combat log.

## Saving

MongoDB Atlas will store accounts and character progress through server-side Next.js route handlers. Game content remains version-controlled in the repository. Local storage may provide an offline safety copy, but the browser must never receive database credentials.
