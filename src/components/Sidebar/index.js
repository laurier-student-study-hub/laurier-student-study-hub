import React from "react";
import {
    Sidebarcontainer,
    Icon,
    Closeicon,
    Sidebarwrapper,
    Sidebarmenu,
    Sidebtnwrap,
    SidebarRoute,
    ImgWrap,
    Img,
} from "./SidebarElements";

const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const Sidebar = ({ isOpen, toggle, img }) => {
    return (
        <Sidebarcontainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Closeicon />
            </Icon>
            <Sidebarwrapper>
                <Sidebarmenu>
                    <ImgWrap>
                        <Img src={img} />
                    </ImgWrap>
                </Sidebarmenu>
                <Sidebtnwrap>
                    <SidebarRoute
                        onClick={() =>
                            openInNewTab(
                                "https://laurier-student-hub.netlify.app/chats"
                            )
                        }
                    >
                        Chat
                    </SidebarRoute>
                </Sidebtnwrap>
            </Sidebarwrapper>
        </Sidebarcontainer>
    );
};

export default Sidebar;
