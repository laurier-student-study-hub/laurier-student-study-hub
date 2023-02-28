import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
    Nav,
    NavbarContainer,
    Navlogo,
    MobileIcon,
    NavMenu,
    Navitem,
    Navlinks,
    Navbtn,
    NavbtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Navlogo to="/" onClick={toggleHome}>
                        Laurier Student Study Hub
                    </Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <Navitem>
                            <Navlinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                About
                            </Navlinks>
                        </Navitem>
                        <Navitem>
                            <Navlinks
                                to="stats"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Security
                            </Navlinks>
                        </Navitem>
                        <Navitem>
                            <Navlinks
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                            >
                                Contact
                            </Navlinks>
                        </Navitem>
                    </NavMenu>
                    <Navbtn>
                        <NavbtnLink
                            onClick={() =>
                                openInNewTab(
                                    "https://laurier-student-hub.netlify.app/chats"
                                )
                            }
                        >
                            Chat
                        </NavbtnLink>
                    </Navbtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
