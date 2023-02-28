import React, { useState } from "react";
import Video from "../../videos/gradient1.mp4";
import { Button } from "../ButtonElement";
import {
    Herocontainer,
    HeroBg,
    VideoBg,
    Herocontent,
    HeroH1,
    HeroP,
    HeroBtnwrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Herocontainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <Herocontent>
                <HeroH1>Stay ahead of the curve</HeroH1>
                <HeroP>
                    All your course questions at the touch of a button. Can't
                    find your question? Post it!
                </HeroP>
                <HeroBtnwrapper>
                    <Button
                        onClick={() =>
                            openInNewTab(
                                "https://laurier-student-hub.netlify.app/chats"
                            )
                        }
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnwrapper>
            </Herocontent>
        </Herocontainer>
    );
};

export default HeroSection;
