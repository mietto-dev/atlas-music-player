import "./App.css";
import { AtlasProvider } from "../atlas/contexts/atlas-context";
import Atlas from "../atlas";

function App() {
  return (
    <AtlasProvider>
      <main>
        <section>
          <Atlas />
        </section>
      </main>
      <div
        id="overlay"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10,
        }}></div>
    </AtlasProvider>
  );
}

export default App;
