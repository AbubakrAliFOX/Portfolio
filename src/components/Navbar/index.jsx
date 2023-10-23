import React, { useState } from "react";
import {Link as LinkR} from 'react-router-dom'
import styled from "styled-components";
import {DiCssdeck} from 'react-icons/di'
import {FaBars} from 'react-icons/fa';
import { useTheme } from 'styled-components';

import { Bio } from '../../data/constants';

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 773px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`
const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 773px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 772px) {
    display: none;
  }
  @media only screen and (min-width: 772px) and (max-width: 836px) {
    justify-content: center;
    width: 70%;
  }
`;

const GitHubButton = styled.a`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    &:hover {
      background-color: #0063ff;
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 773px) { 
      font-size: 14px;
    }

    @media only screen and (min-width: 773px) and (max-width: 836px) {
      font-size: 14px;
      width: 100%;
      padding: 0 4px;
      justify-content: center;
    }
    
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? '100%' : '0')};
    z-index: ${({ open }) => (open ? '1000' : '-1000')};

`

const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
            <NavLogo to='#about'>
              <svg width="64px" height="64px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.5 11V6.5C1.5 5.39543 2.39543 4.5 3.5 4.5C4.60457 4.5 5.5 5.39543 5.5 6.5V11M1.5 8.5H5.5M12 7.5H9.5M12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5H9.5V7.5M12 7.5C12.8284 7.5 13.5 8.17157 13.5 9C13.5 9.82843 12.8284 10.5 12 10.5H9.5V7.5M7.5 1V14" stroke="#ffffff"></path> </g></svg>
            </NavLogo>
            <MobileIcon>
                <FaBars onClick={() => {
                setOpen(!open)
                 }} />
            </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#experience'>Experience</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton target="_blank" href={Bio.github}>Github Profile</GitHubButton>
                </ButtonContainer>
            </NavbarContainer>
            {
                open && (
                    <MobileMenu open={open}>
                        <MobileMenuLink href="#about" onClick={() => {
                        setOpen(!open)
                        }}>About</MobileMenuLink>
                        <MobileMenuLink href='/#skills' onClick={() => {
                        setOpen(!open)
                        }}>Skills</MobileMenuLink>
                        <MobileMenuLink href='#experience' onClick={() => {
                        setOpen(!open)
                        }}>Experience</MobileMenuLink>
                        <MobileMenuLink href='#projects' onClick={() => {
                        setOpen(!open)
                        }}>Projects</MobileMenuLink>
                        <MobileMenuLink href='#education' onClick={() => {
                        setOpen(!open)
                        }}>Education</MobileMenuLink>
                        <GitHubButton style={{padding: '10px 16px',backgroundColor: `#0063ff`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
                    </MobileMenu>
                )
            }
        </Nav>
    )
}

export default Navbar;