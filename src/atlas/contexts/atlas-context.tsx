import * as React from "react";
import { createPortal } from "react-dom";
import { Tooltip } from "../components/tooltip";

export type TooltipEvent = {
  coords?: DOMRect;
  title?: string;
  content?: React.ReactNode;
};

export type AtlasServiceSpec = {
  tooltipOpen: (ev: TooltipEvent) => void;
  tooltipClose: () => void;
};

export type AtlasContextBag = {
  atlasService: AtlasServiceSpec;
};

export const AtlasContext = React.createContext<AtlasContextBag>({
  atlasService: {
    tooltipOpen: () => {},
    tooltipClose: () => {},
  },
});

export const AtlasProvider = ({ children }: React.PropsWithChildren) => {
  const [coords, setCoords] = React.useState<DOMRect>();
  const [content, setContent] = React.useState<React.ReactNode>();
  const [title, setTitle] = React.useState<string>();
  const [showTooltip, setShowTooltip] = React.useState(false);

  const reset = () => {
    setCoords(undefined);
    setContent(undefined);
    setTitle(undefined);
    setShowTooltip(false);
  };

  // All path elements will call tooltipOpen whithin onMouseEnter handler.
  // Ex: (ev) => { tooltipOpen({coords: ev.getBoundingRectangle(), title, content })}
  // Where title and content are props or state values
  const atlasService = Object.freeze({
    tooltipOpen: (ev: TooltipEvent) => {
      const { content: evContent, title: evTitle, coords: evCoords } = ev;

      !!evCoords && setCoords(evCoords);
      !!evContent && setContent(evContent);
      !!evTitle && setTitle(evTitle);

      setShowTooltip(true);
    },
    tooltipClose: () => {
      reset();
    },
  });

  const overlayEl = document.getElementById("overlay") || document.body;

  return (
    <AtlasContext.Provider value={{ atlasService }}>
      {showTooltip &&
        createPortal(
          <Tooltip coords={coords} title={title} show={showTooltip}>
            {content}
          </Tooltip>,
          overlayEl
        )}

      {children}
    </AtlasContext.Provider>
  );
};
