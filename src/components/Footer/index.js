import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    WebsiteRights,
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Socials</FooterLinkTitle>
                            <a
                                id="links"
                                href="mailto:laurierstudentstudyhub@gmail.com"
                                target="_blank"
                            >
                                Email
                            </a>
                            <a
                                id="links"
                                href="https://www.instagram.com/wlussh/"
                                target="_blank"
                            >
                                Instagram
                            </a>
                            <a
                                id="links"
                                href="https://www.instagram.com/uwcsclub/"
                                target="_blank"
                            >
                                UW Computer Science Club
                            </a>
                            <a
                                id="links"
                                href="https://www.instagram.com/laurier.cs/"
                                target="_blank"
                            >
                                Laurier Computing Society
                            </a>
                            <a
                                id="links"
                                href="https://www.instagram.com/uwaterloodsc/"
                                target="_blank"
                            >
                                Waterloo Data Science Club
                            </a>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Developers</FooterLinkTitle>
                            <a
                                id="links"
                                href="https://www.linkedin.com/in/abrar-murad/"
                                target="_blank"
                            >
                                Abrar Murad
                            </a>
                            <a
                                id="links"
                                href="https://www.linkedin.com/in/ali-mujtaba-ahmed-8a017b246/"
                                target="_blank"
                            >
                                Ali Ahmed
                            </a>
                            <a
                                id="links"
                                href="https://www.linkedin.com/in/zayed-syed-97027a246/"
                                target="_blank"
                            >
                                Zayed Sayed
                            </a>
                            <a
                                id="links"
                                href="https://www.linkedin.com/in/syed-rafae-hashmi/"
                                target="_blank"
                            >
                                Rafae Hashmi
                            </a>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <WebsiteRights>LSSHub | All Rights Reserved</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
