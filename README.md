# Explorer Music Player

# Atlas - Fully interactive world map in React

#### TODO

**ATLAS**

- [ ] Create Map / Region / Country components
  - Map is the root SVG containing either Region or Country
  - Region is a Country grouping
  - Country represents a single federation, as recognized today
  - In the future, Country may be migrated to a more generic Territory component, making way to more customizable maps
- [ ] Create MapContext with debounce for mouse events
  - This context Provider actually returns the Overlay (pointer events none, absolute 100%, etc), and renders the tooltips on the fly
  - Instead of holding a ref to each SVG element, creating 1 Tooltip for EACH SVG element and showing it on mouse over
  - There's only ONE Tooltip, Context gets BoundingClientRect() data, ID, etc, on mouse over events
  - After the apropriate state update, the tooltip is again rendered
  - Delays MouseLeave event effects
- [ ] Composable Map component (regions, continents, arbitrary combinations)
- [ ] Portal Tooltips to a separate Overlay component, outside SVG
- [ ] Draggable map

**MUSIC**

- [ ] Create results carousel
- [ ] Create filter actions
- [ ] Create API integration
- [ ] Create LivePlayer / Open on Spotify
- [ ] Create MusicContext to handle interactions, API calls, etc

**PLAYER (app / main interface)**

- [ ] base Layout and component shells. REF: Vector displays, OP1 style controls and fonts
  - Map
  - Player
  - Navbar
- [ ] Themes: WarRoom, Mario, etc
- [ ] User: Integrate with spotify API and create it's own parameters

**EQUALIZER**
