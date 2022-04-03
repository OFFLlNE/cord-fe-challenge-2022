import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import * as colors from '../../colors';
import Arrow from '../../images/arrow-icon.png';
import SearchWhite from '../../images/search-icon-white.png';
import MenuHamburger from '../../images/menu-hamburger-icon.png';

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileMenu
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        src={MenuHamburger}
        alt="Menu navigation"
      />
      <SideNavBarCont open={isOpen} className={isOpen ? 'visible' : ''}>
        <SideNavHeader>
          Wesley
          <img src={Arrow} alt="Arrow pointing down" />
        </SideNavHeader>
        <SideNavMainLink to="/discover" exact>
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </>
  );
}

const MobileMenu = styled.img`
  display: none;
  cursor: pointer;
  width: 75px;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const SideNavBarCont = styled.div`
  position: fixed;
  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;
