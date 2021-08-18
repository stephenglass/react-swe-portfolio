import "./SectionContainer.css";
import useIntersection from "./Intersection";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ContainerProps {
  index: number;
  name: string;
  children?: React.ReactNode;
  addElement: (index: number) => void;
  removeElement: (index: number) => void;
}

const SectionContainer: React.FC<ContainerProps> = ({
  index,
  name,
  children,
  addElement,
  removeElement,
}) => {
  // const ref = useRef<HTMLInputElement | null>(null);
  // const isVisible = useIntersection(ref, "-25px");
  const [ref, inView] = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      addElement(index);
    } else {
      removeElement(index);
    }
  }, [inView]);

  return (
    <div ref={ref} className="section-container">
      <div id={"anchor_" + name} className="anchor"></div>
      {children}
    </div>
  );
};

export default SectionContainer;
