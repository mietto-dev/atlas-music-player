import * as React from "react";
import { AtlasContext } from "../contexts/atlas-context";
export type PathProps = {
  d?: string;
  id?: string;
  name?: string;
  title?: string;
  content?: React.ReactNode;
};

export const Path = (props: PathProps) => {
  const { atlasService } = React.useContext(AtlasContext);
  const { title, content } = props;

  const handleMouseEnter = (ev: React.MouseEvent) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const multX = 2000 / window.innerWidth;
    const multY = 857 / window.innerHeight;

    const coords = {
      ...rect,
      left: rect.left + 60 + rect.width / 2,
      top: rect.top - 80 + rect.height / 3,
    };
    atlasService.tooltipOpen({ coords, title, content });
  };

  const handleMouseLeave = () => {
    atlasService.tooltipClose();
  };

  return (
    <path
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
};
