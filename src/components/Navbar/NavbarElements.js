import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#1B1C1E" : "transparent")};
    height: 80px;
    display: flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const Navlogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Navitem = styled.li`
    height: 80px;
    padding: 10px;
`;

export const Navlinks = styled(LinkS)`
    color: white;
    display: flex;
    font-weight: bold;
    align-items: center;
    text-decoration: none;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid #fbdd49;
    }
`;

export const Navbtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavbtnLink = styled(LinkR)`
    border-radius: 50px;
    background: linear-gradient(to left, #fbdd49, #6d1dc6);
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(to right, #fbdd49, #6d1dc6);
        color: white;
    }
`;
