import { FooterPaddingMobile, FooterPaddingNonMobile } from "../data/AppMeta";
import "./styles/FooterArea.scss";

export interface ContainerProps {
  widthBreakpoint?: number;
  padding?: string;
}

const FooterArea: React.FC<ContainerProps> = ({
  widthBreakpoint = 992,
  padding = FooterPaddingNonMobile,
}) => {
  return (
    <div
      className="padding-container"
      style={{
        height:
          window.innerWidth >= widthBreakpoint ? padding : FooterPaddingMobile,
      }}
    ></div>
  );
};

export default FooterArea;
