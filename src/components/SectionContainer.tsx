import "./SectionContainer.css";
import useIntersection from "./Intersection";
import { useRef, useEffect } from "react";

interface ContainerProps {
  name: string;
  children?: React.ReactNode;
  visibility: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}

const SectionContainer: React.FC<ContainerProps> = ({
  name,
  children,
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
    <div ref={ref}>
      <div id={"anchor_" + name} className="anchor"></div>
      {children}
    </div>
  );
};

export default SectionContainer;
