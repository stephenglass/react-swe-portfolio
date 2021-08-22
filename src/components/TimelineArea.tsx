import {
  IonAvatar,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonChip,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "./styles/Timeline.scss";
import { PlaceholderImg } from "../data/AppMeta";

const TimelineArea: React.FC = () => {
  return (
    <div className="timeline timeline--mobile">
      <div className="timeline__wrap">
        <div className="timeline__items">
          <div className="timeline__item timeline__item--left">
            <div className="timeline__content">
              <IonCard color="light" style={{ margin: 0 }}>
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </IonCardContent>
              </IonCard>
            </div>
          </div>
          <div className="timeline__item timeline__item--right">
            <div className="timeline__content">
              <IonCard color="light" style={{ margin: 0 }}>
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </IonCardContent>
              </IonCard>
            </div>
          </div>
          <div className="timeline__item timeline__item--left">
            <div className="timeline__content">
              <IonCard color="light" style={{ margin: 0 }}>
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in
                  awhile, and climb a mountain or spend a week in the woods.
                  Wash your spirit clean.
                </IonCardContent>
              </IonCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineArea;
