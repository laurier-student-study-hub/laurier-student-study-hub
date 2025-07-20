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

                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <WebsiteRights>LSSHub | All Rights Reserved</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
