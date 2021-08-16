import "./ExploreContainer.css";
import useIntersection from "./Intersection";
import { useRef, useEffect } from "react";

interface ContainerProps {
  name: string;
  visibility: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}

const ExploreContainer: React.FC<ContainerProps> = ({
  name,
  visibility: [visibleElements, setVisibleElements],
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const isVisible = useIntersection(ref, "-25px");

  useEffect(() => {
    if (isVisible && !visibleElements.includes(name)) {
      setVisibleElements([...visibleElements, name]);
    } else if (!isVisible && visibleElements.includes(name)) {
      setVisibleElements([
        ...visibleElements.filter((elements) => elements !== name),
      ]);
    }
  }, [isVisible]);

  return (
    <div className="container" ref={ref}>
      <div id={"anchor_" + name} className="anchor"></div>
      <strong>{name}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
