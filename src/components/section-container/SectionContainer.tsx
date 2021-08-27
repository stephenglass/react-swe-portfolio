import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ObserverRootMargin } from "../../data/AppMeta";

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
  const [ref, inView] = useInView({ rootMargin: ObserverRootMargin });

  useEffect(() => {
    if (inView) {
      addElement(index);
    } else {
      removeElement(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref}>
      <div id={"anchor_" + name} className="anchor"></div>
      {children}
    </div>
  );
};

export default SectionContainer;
