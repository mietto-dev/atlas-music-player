import * as React from "react";
import "./App.css";
import { Path } from "../atlas/components/path";
import countryElements from "../atlas/constants/country-elements";
import { AtlasProvider } from "../atlas/contexts/atlas-context";

type PathAttrs = {
  d: string;
  id?: string;
  name?: string;
  class?: string;
};

// changes class to className
type PathProps = Omit<PathAttrs, "class"> & { className?: string };

type PathElement = {
  name: string;
  attributes: PathAttrs;
};

function App() {
  const renderPaths = () => {
    const allPathProps: PathProps[] = countryElements.map((el: PathElement) => {
      const { class: className, ...rest } = el.attributes;
      return { className, ...rest };
    });

    const children = allPathProps.map((props, idx) => {
      const title = props.name || props.className;

      if (!title) {
        console.error("NO TITLE FOR:");
        console.error(props);
        return <></>;
      }

      return (
        <Path
          {...props}
          key={`path-${props.className}-${idx}`}
          title={title}
          content={<span>Styled content for {title}</span>}
        />
      );
    });

    const circles = [
      <circle cx="997.9" cy="189.1" id="0" key={"c1"} />,
      <circle cx="673.5" cy="724.1" id="1" key={"c2"} />,
      <circle cx="1798.2" cy="719.3" id="2" key={"c3"} />,
    ];

    return children.concat(circles);
  };

  const svgChildren = renderPaths();

  return (
    <AtlasProvider>
      <main>
        <section>
          <h3>Tooltip Test</h3>
          {/* <svg
          baseProfile="tiny"
          strokeLinecap="round"
          strokeLinejoin="round"
          version="1.2"
          viewBox="0 0 2000 857"
          xmlns="http://www.w3.org/2000/svg">
          <Tooltip title="Afghanistan" pathProps={el.props} />

          <path
            className="Angola"
            d="M 1121.2 572 1121.8 574 1121.1 577.1 1122 580.1 1121.1 582.5 1121.5 584.7 1109.8 584.6 1109 605.1 1112.6 610.3 1116.2 614.3 1105.8 616.9 1092.3 616 1088.5 613 1065.8 613.2 1065 613.7 1061.7 610.8 1058.1 610.6 1054.7 611.7 1052 612.9 1051.5 608.9 1052.4 603.2 1054.4 597.3 1054.7 594.6 1056.6 588.8 1058 586.2 1061.3 582 1063.2 579.1 1063.8 574.4 1063.5 570.7 1061.9 568.4 1060.4 564.5 1059.1 560.7 1059.4 559.3 1061.1 556.8 1059.5 550.6 1058.3 546.3 1055.5 542.2 1056.1 541 1058.4 540.1 1060.1 540.2 1062.1 539.5 1078.8 539.6 1080.1 544.3 1081.7 548.2 1083 550.3 1085.1 553.6 1088.9 553.1 1090.7 552.2 1093.8 553.1 1094.7 551.5 1096.2 547.8 1099.7 547.5 1100 546.4 1102.9 546.4 1102.4 548.7 1109.2 548.6 1109.3 552.7 1110.4 555.1 1109.5 559 1109.9 563 1111.7 565.4 1111.3 573 1112.7 572.4 1115.1 572.6 1118.6 571.6 1121.2 572 Z"></path>
        </svg> */}
        </section>
        <section>
          <svg
            baseProfile="tiny"
            strokeLinecap="round"
            strokeLinejoin="round"
            version="1.2"
            viewBox="0 0 2000 857"
            xmlns="http://www.w3.org/2000/svg">
            {svgChildren}
          </svg>
        </section>

        {/* <WorldMap /> */}
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
