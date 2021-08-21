import { IonIcon, useIonPopover } from "@ionic/react";
import {
  informationCircleOutline,
  informationCircleSharp,
} from "ionicons/icons";
import "./styles/SectionDivider.scss";

interface ContainerProps {
  text: string;
  info?: string;
}

const PopoverInfo: React.FC<{
  onHide: () => void;
  info: string;
}> = ({ onHide, info }) => <div className="info-popover">{info}</div>;

const SectionDivider: React.FC<ContainerProps> = ({ text, info }) => {
  const [present, dismiss] = useIonPopover(PopoverInfo, {
    onHide: () => dismiss(),
    info: info,
  });
  return (
    <div className="divider">
      <div className="spacing" />
      <h1>
        {text + " "}
        {info && (
          <IonIcon
            className="info-icon"
            ios={informationCircleOutline}
            md={informationCircleSharp}
            onClick={(e) =>
              present({
                showBackdrop: false,
                event: e.nativeEvent,
              })
            }
          />
        )}
      </h1>

      <b className="hr"></b>
    </div>
  );
};

export default SectionDivider;
