import "./SectionDivider.scss";

interface ContainerProps {
  text: string;
}

const SectionDivider: React.FC<ContainerProps> = ({ text }) => {
  return (
    <div className="divider">
      <div className="spacing" />
      <h1>About</h1>

      <b className="hr"></b>
    </div>
  );
};

export default SectionDivider;
