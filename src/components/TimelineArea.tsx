import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "./styles/Timeline.scss";

export interface TimelineObject {
  subtitle: string;
  title: string;
  undertitle: string;
  description?: string;
}

export interface ContainerProps {
  alternate?: boolean;
  side?: "left" | "right";
  items: TimelineObject[];
}

const TimelineArea: React.FC<ContainerProps> = ({
  alternate = true,
  side = "left",
  items,
}) => {
  var align_primary = "timeline__item--left";
  var align_secondary = "timeline__item--right";
  if (side === "right") {
    align_primary = "timeline__item--right";
    align_secondary = "timeline__item--left";
  }
  return (
    <div className="timeline timeline--mobile">
      <div className="timeline__wrap">
        <div className="timeline__items">
          {items.map((item: TimelineObject, index: number) => (
            <div
              key={index}
              className={
                "timeline__item " +
                (alternate
                  ? index % 2 === 0
                    ? align_primary
                    : align_secondary
                  : align_primary)
              }
            >
              <div className="timeline__content">
                <IonCard className="timeline-card">
                  <IonCardHeader>
                    <IonCardSubtitle>
                      {item.subtitle} {index === 0 && <span>(Current)</span>}
                    </IonCardSubtitle>
                    <IonCardTitle>{item.title}</IonCardTitle>
                    <IonCardSubtitle class="undertitle">
                      {item.undertitle}
                    </IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>{item.description}</IonCardContent>
                </IonCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineArea;
