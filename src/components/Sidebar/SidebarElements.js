import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const Sidebarcontainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#330072, #6d1dc6, #fbdd49, #f2a900);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Closeicon = styled(FaTimes)`
    color: black;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const Sidebarwrapper = styled.div`
    color: white;
`;

export const Sidebarmenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-top: 45px;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const Sidebtnwrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: linear-gradient(to left, #fbdd49, #6d1dc6);
    white-space: nowrap;
    padding: 16px 64px;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(to right, #fbdd49, #6d1dc6);
        color: white;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    display: block;
`;

export const Img = styled.img`
    width: 50%;
    padding-right: 0;
`;
