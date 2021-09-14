import { IonIcon } from "@ionic/react";
import { footerLinks } from "../../data/Links";
import { appSections } from "../../data/AppData";
import { chevronUpCircle } from "ionicons/icons";
import "./FooterArea.scss";

export interface FooterLink {
  iosIcon: string;
  mdIcon: string;
  url: string;
}

const FooterArea: React.FC = () => {
  const scrollToTop = () => {
    const element = document.getElementById(
      `anchor_${appSections[0].url.substr(1)}`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="padding-container">
      <div className="footer">
        Created & designed by <strong>Stephen Glass</strong>
      </div>
      <div className="footer-links">
        {footerLinks.length > 0 &&
          footerLinks.map((link: FooterLink, k: number) => (
            <a key={k} href={link.url} target="_blank" rel="noreferrer">
              <IonIcon ios={link.iosIcon} md={link.mdIcon} />
            </a>
          ))}

        <IonIcon
          className="scroll-icon"
          icon={chevronUpCircle}
          onClick={() => scrollToTop()}
        />
      </div>
    </div>
  );
};

export default FooterArea;
