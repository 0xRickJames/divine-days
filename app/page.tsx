"use client";

import { useState } from "react";

type Building = {
  id: string;
  name: string;
  path: string;
  icon: string;
  specialty: string;
  description: string;
  actions: string[];
};

const realms = [
  { name: "Shireville", subtitle: "The Mortal Beginning", symbol: "✦", unlocked: true },
  { name: "The Enchanted Forest", subtitle: "Realm II", symbol: "♧", unlocked: false },
  { name: "The Underworld", subtitle: "Realm III", symbol: "◆", unlocked: false },
  { name: "The Nexus of Planes", subtitle: "Realm IV", symbol: "◎", unlocked: false }
];

const buildings: Building[] = [
  {
    id: "barracks",
    name: "Shireville Barracks",
    path: "Paladin",
    icon: "♜",
    specialty: "Armor & Defense",
    description: "An old stone fortress where shieldbearers temper steel, discipline, and resolve.",
    actions: ["Visit the Armory", "Train Defense", "Take the Paladin’s Oath", "Enter the Training Yard"]
  },
  {
    id: "camp",
    name: "Shireville Camp",
    path: "Barbarian",
    icon: "⚔",
    specialty: "Weapons & Offense",
    description: "Warriors gather beyond the walls to trade weapons and test strength in the fighting pit.",
    actions: ["Visit the Weaponsmith", "Train Offense", "Receive the Barbarian’s Brand", "Enter the Fighting Pit"]
  },
  {
    id: "tavern",
    name: "Shireville Tavern",
    path: "Rogue",
    icon: "♠",
    specialty: "Skills & Finesse",
    description: "Rumors, contracts, and forbidden techniques change hands beneath the lantern smoke.",
    actions: ["Meet the Skillmaster", "Train Finesse", "Receive the Rogue’s Tattoo", "Accept a Tavern Challenge"]
  },
  {
    id: "tower",
    name: "Shireville Tower",
    path: "Mage",
    icon: "✧",
    specialty: "Spells & Intelligence",
    description: "A crooked tower filled with celestial instruments, sealed books, and impatient apprentices.",
    actions: ["Enter the Spell Library", "Train Intelligence", "Perform the Mage’s Ritual", "Begin the Arcane Trial"]
  }
];

export default function Home() {
  const [screen, setScreen] = useState<"map" | "realm" | "building">("map");
  const [building, setBuilding] = useState<Building | null>(null);
  const [notice, setNotice] = useState("Choose a destination to begin your journey.");

  const openBuilding = (next: Building) => {
    setBuilding(next);
    setScreen("building");
    setNotice(`${next.name} awaits.`);
  };

  const back = () => {
    if (screen === "building") {
      setScreen("realm");
      setNotice("You return to the streets of Shireville.");
    } else {
      setScreen("map");
      setNotice("Choose a destination to begin your journey.");
    }
  };

  return (
    <main className="game-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setScreen("map")} aria-label="Return to world map">
          <span className="brand-mark">☉</span>
          <span><strong>Divine Days</strong><small>Prototype</small></span>
        </button>
        <div className="character-pill"><span>Wanderer</span><b>Level 1</b></div>
      </header>

      <section className="stage">
        {screen === "map" && (
          <>
            <div className="scene-heading">
              <p className="eyebrow">The Mortal Realms</p>
              <h1>Choose your path</h1>
              <p>Grow through four realms, then ascend the seven planetary gates.</p>
            </div>
            <div className="realm-grid">
              {realms.map((realm, index) => (
                <button
                  key={realm.name}
                  className={`realm-card realm-${index + 1}`}
                  disabled={!realm.unlocked}
                  onClick={() => { setScreen("realm"); setNotice("You arrive at Shireville."); }}
                >
                  <span className="realm-symbol">{realm.symbol}</span>
                  <span className="realm-copy"><small>{realm.subtitle}</small><strong>{realm.name}</strong></span>
                  <span className="realm-state">{realm.unlocked ? "Enter" : "Locked"}</span>
                </button>
              ))}
            </div>
            <div className="gate-orbit" aria-label="The seven planetary gates">
              {['☽','☿','♀','☉','♂','♃','♄'].map((glyph, i) => <span key={glyph} title={`Gate ${i + 1}`}>{glyph}</span>)}
            </div>
          </>
        )}

        {screen === "realm" && (
          <>
            <button className="back" onClick={back}>← World map</button>
            <div className="scene-heading realm-heading">
              <p className="eyebrow">Realm I</p>
              <h1>Shireville</h1>
              <p>A quiet crossroads where every divine journey begins with a mortal choice.</p>
            </div>
            <div className="building-grid">
              {buildings.map((place) => (
                <button key={place.id} className={`building-card ${place.id}`} onClick={() => openBuilding(place)}>
                  <span className="building-icon">{place.icon}</span>
                  <span><small>{place.path} · {place.specialty}</small><strong>{place.name}</strong></span>
                  <em>Enter →</em>
                </button>
              ))}
            </div>
          </>
        )}

        {screen === "building" && building && (
          <>
            <button className="back" onClick={back}>← Shireville</button>
            <div className={`location-art ${building.id}`}>
              <span className="location-glyph">{building.icon}</span>
              <div>
                <p className="eyebrow">{building.path} · {building.specialty}</p>
                <h1>{building.name}</h1>
                <p>{building.description}</p>
              </div>
            </div>
            <div className="action-grid">
              {building.actions.map((action, index) => (
                <button key={action} onClick={() => setNotice(index === 3 ? `${action} will open the first turn-based challenge.` : `${action} is planned for the next build.`)}>
                  <span>{["◇", "△", "○", "⚔"][index]}</span>
                  {action}
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      <footer className="statusbar">
        <span className="status-orb" />
        <p>{notice}</p>
        <nav aria-label="Game menu">
          <button onClick={() => setScreen("map")}>Map</button>
          <button onClick={() => setNotice("Character sheet is coming next.")}>Character</button>
          <button onClick={() => setNotice("Inventory is coming next.")}>Inventory</button>
        </nav>
      </footer>
    </main>
  );
}
