import { sendOutline, sendSharp } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/react";
import "./ContactArea.scss";

const ContactArea: React.FC = () => {
  return (
    <div className="contact-container">
      <p>Thanks for visiting my portfolio. Check back for any updates!</p>
      <IonButton fill="outline" size="default">
        <IonIcon slot="start" ios={sendOutline} md={sendSharp} />
        Email Me
      </IonButton>
    </div>
  );
};

export default ContactArea;
