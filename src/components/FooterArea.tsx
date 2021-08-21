import "./styles/FooterArea.css";

export interface ContainerProps {
  widthBreakpoint?: number;
  padding?: string;
}

const FooterArea: React.FC<ContainerProps> = ({
  widthBreakpoint = 992,
  padding = "250px",
}) => {
  return (
    <div
      className="padding-container"
      style={{
        height: window.innerWidth >= widthBreakpoint ? padding : "0px",
      }}
    ></div>
  );
};

export default FooterArea;
