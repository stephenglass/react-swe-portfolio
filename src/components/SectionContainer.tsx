import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ObserverThreshold } from "../data/AppMeta";
import "./styles/SectionContainer.css";

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
    threshold: ObserverThreshold,
  });

  useEffect(() => {
    if (inView) {
      addElement(index);
    } else {
      removeElement(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className="section-container">
      <div id={"anchor_" + name} className="anchor"></div>
      {children}
    </div>
  );
};

export default SectionContainer;
