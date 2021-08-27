import { IonIcon } from "@ionic/react";
import { footerLinks } from "../../data/Links";
import "./FooterArea.scss";

export interface FooterLink {
  iosIcon: string;
  mdIcon: string;
  url: string;
}

const FooterArea: React.FC = () => {
  return (
    <div className="padding-container">
      <div className="footer">
        Created & designed by <strong>Stephen Glass</strong>
      </div>
      <div className="footer-links">
        {footerLinks.length > 0 &&
          footerLinks.map((link: FooterLink, k: number) => (
            <a key={k} href={link.url}>
              <IonIcon ios={link.iosIcon} md={link.mdIcon} />
            </a>
          ))}
      </div>
    </div>
  );
};

export default FooterArea;
