import { IonButton, IonIcon } from "@ionic/react";
import "./ContactArea.scss";

interface ContactButton {
  iosIcon: string;
  mdIcon: string;
  text: string;
  url: string;
}

interface ContainerProps {
  text: string;
  buttons?: ContactButton[];
}

const ContactArea: React.FC<ContainerProps> = (props) => {
  return (
    <div className="contact-container">
      <p>{props.text}</p>
      {props.buttons &&
        props.buttons.map((button: ContactButton, k: number) => (
          <IonButton fill="outline" size="default" href={button.url} key={k}>
            <IonIcon slot="start" ios={button.iosIcon} md={button.mdIcon} />
            {button.text}
          </IonButton>
        ))}
    </div>
  );
};

export default ContactArea;
