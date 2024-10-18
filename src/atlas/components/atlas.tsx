import "../styles/atlas.css";
import { Path } from "./path";
import countryElements from "../constants/country-elements";

export const Atlas = () => {
  return (
    <section className="grid-bg">
      <svg
        baseProfile="tiny"
        strokeLinecap="round"
        strokeLinejoin="round"
        version="1.2"
        viewBox="100 0 2000 857"
        xmlns="http://www.w3.org/2000/svg">
        {countryElements.map((props, idx) => {
          const { class: className, ...attrs } = props.attributes;
          const pathProps = { ...attrs, className };
          const title = pathProps.name || pathProps.className;

          if (!title) {
            console.error("NO TITLE FOR:");
            console.error(props);
            return undefined;
          }

          return (
            <Path
              {...pathProps}
              key={`path-${pathProps.className}-${idx}`}
              title={title}
              content={<span>Styled content for {title}</span>}
            />
          );
        })}
      </svg>
    </section>
  );
};
