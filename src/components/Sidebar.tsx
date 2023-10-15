"use client";

import { useState } from "react"

import styled from "styled-components"
import barBackground from "@/assets/bar.png"
import selectedEffect from "@/assets/selected-effect.png"
import selectedMark from "@/assets/selected-mark.png"
import DotsIcon from "./icons/DotsIcon"
import LogoIcon from "@/assets/logo-icon.png"


import Logo1 from "@/assets/sidebar-logos/logo-1.png"
import Logo2 from "@/assets/sidebar-logos/logo-2.png"
import Logo3 from "@/assets/sidebar-logos/logo-3.png"
import Logo4 from "@/assets/sidebar-logos/logo-4.png"
import Logo5 from "@/assets/sidebar-logos/logo-5.png"
import Image from "next/image";

interface SelectedProps {
  selected: number
}

const Aside = styled.aside`
  background: rgba(29, 32, 62, 0.30);
  backdrop-filter: blur(10px);
  overflow: hidden;
`

const Background = styled(Image)`
  position: absolute;
  right: -18px;
  z-index: 2;
  user-select: none;
  pointer-events: none;

  fill: rgba(56, 58, 87, 0.50);
  filter: drop-shadow(-1px 0px 0px rgba(255, 255, 255, 0.20));
`

const Selected = styled.div<SelectedProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  top: ${({ selected }) => `${132 + 64 * selected}px`};
  transition: all 300ms;
`

const SelectedEffect = styled(Image)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  user-select: none;
  pointer-events: none;
  filter: blur(15px);
`

const SelectedMark = styled(Image)`
  position: absolute;
  top: 50%;
  left: 4.82px;
  transform: translateY(-50%);
  z-index: 3;
  user-select: none;
  pointer-events: none;
`

const Logo = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
  }

  img {
    position: absolute;
    top: 32px;
    left: 16px;
  }
`

const IconsList = styled.ul`
  position: absolute;
  top: 132px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 4;
`

const IconItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default function Sidebar() {
  const [iconSelected, setIconSelected] = useState(0);

  return (
    <Aside>
      <Background src={barBackground} alt="" width={87} height={844} />

      <Selected selected={iconSelected}>
        <SelectedEffect src={selectedEffect} alt="" width={72} height={72} />
        <SelectedMark src={selectedMark} alt="" width={7.4} height={37} />
      </Selected>
      

      <Logo>
        <DotsIcon />

        <Image src={LogoIcon} alt="Logo" width={40} height={40} />
      </Logo>

      <IconsList>
        <IconItem onClick={() => setIconSelected(0)}>
          <Image src={Logo1} alt="Logo" width={40} height={40} />
        </IconItem>

        <IconItem onClick={() => setIconSelected(1)}>
          <Image src={Logo2} alt="Logo" width={40} height={40} />
        </IconItem>

        <IconItem onClick={() => setIconSelected(2)}>
          <Image src={Logo3} alt="Logo" width={40} height={40} />
        </IconItem>

        <IconItem onClick={() => setIconSelected(3)}>
          <Image src={Logo4} alt="Logo" width={40} height={40} />
        </IconItem>

        <IconItem onClick={() => setIconSelected(4)}>
          <Image src={Logo5} alt="Logo" width={40} height={40} />
        </IconItem>
      </IconsList>
    </Aside>
  )
}