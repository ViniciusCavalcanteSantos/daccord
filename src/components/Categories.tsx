"use client";

import Link from "next/link"
import ExploreIcon from "./icons/ExploreIcon"
import MusicIcon from "./icons/MusicIcon"
import styled from "styled-components";
import { usePathname } from "next/navigation";
import EducationIcon from "./icons/EducationIcon";
import GamingIcon from "./icons/GamingIcon";
import TechIcon from "./icons/TechIcon";
import EntertainmentIcon from "./icons/EntertainmentIcon";
import StudentHub from "./icons/StudentHub";

interface NavItemProps {
  selected: boolean
}

const Aside = styled.nav`
  height: 100%;
  background: rgba(44, 47, 72, 0.50);
`

const Title = styled.h1`
  color: #FFF;
  font-size: 17px;
  font-weight: 700;
  padding: 12px 16px;
  line-height: 20px;
  box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.10) inset;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
`;

const NavItem = styled.li<NavItemProps>`

  > a {
    display: flex;
    align-items: center;
    color: #FFF;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.36px;
    padding: 8px;
    border-radius: 5px;
    background-blend-mode: overlay;
    background: ${props => props.selected ? "rgba(0, 0, 0, 0.50)" : ""};
  }

  > a svg {
    margin-right: 8px;
  }

`

function Categories() {
  const pathname = usePathname()

  return (
    <Aside>
      <Title>Explore</Title>

      <NavList>
        <NavItem selected={pathname === "/"}>
          <Link href="/">
            <ExploreIcon />
            Home
          </Link>
        </NavItem>

        <NavItem selected={pathname === "/music"}>
          <Link href="/music">
            <MusicIcon />
            Music
          </Link>
        </NavItem>

        <NavItem selected={pathname === "/gaming"}>
          <Link href="/gaming">
            <GamingIcon />
            Gaming
          </Link>
        </NavItem>

        <NavItem selected={pathname === "/education"}>
          <Link href="/education">
            <EducationIcon />
            Education
          </Link>
        </NavItem>

        <NavItem selected={pathname === "/tech"}>
          <Link href="/tech">
            <TechIcon />
            Science & Tech
          </Link>
        </NavItem>

        <NavItem selected={pathname === "/entertainment"}>
          <Link href="/entertainment">
            <EntertainmentIcon />
            Entertainment
          </Link>
        </NavItem>

        <NavItem selected={pathname === "/student-hub"}>
          <Link href="/student-hub">
            <StudentHub />
            Student Hubs
          </Link>
        </NavItem>
      </NavList>
    </Aside>
  )
}

export default Categories