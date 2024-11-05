"use client"

import styled from "styled-components"
import Image from "next/image"

import soundWave from "@/assets/sound-wave.png"
import soundWaveBackground from "@/assets/sound-wave-background.png"
import React from "react"
import HexagonBorder from "./HexagonBorder"
import MicrofoneIcon from "./icons/sound-control/MicrofoneIcon"
import HeadsetIcon from "./icons/sound-control/HeadsetIcon"
import AddFriendIcon from "./icons/sound-control/AddFriendIcon"

const BottomDivTag = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const SoundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 84px;
  background-color: #47466D;

  img {
    position: absolute;
  }
`

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 84px;
  background-color: #1D203E;
  padding: 20px 12px 20px 12px;
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.10) inset;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fff;
  font-size: 13px;
`

const IconsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 32px 32px 32px;
  gap: 20px;

  > svg {
    cursor: pointer;
  }
`

const BorderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .hexagon-border {
    position: absolute !important;
  }
`

const Pointer = styled.div`
  position: absolute;
  top: -52px;
  left: 50%;
  transform: translateX(-50%) rotateZ(45deg);
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #47466D;
`

export default function SoundControl() {
  const src = "https://media.istockphoto.com/id/1311084168/pt/foto/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?s=2048x2048&w=is&k=20&c=ZlVkWkAHbBJDBrqkHWIqoHmYRxc32KDvCsRsq5oDXPE="

  return(
    <BottomDivTag>
      <SoundDiv>
        <Image src={soundWaveBackground} alt="" width={316} height={56}/>
        <Image src={soundWave} alt="" width={248} height={36}/>
      </SoundDiv>

      <UserDiv>
        <UserInfo>
          <HexagonBorder src={src} width={32} height={32}/>

          sophiefortune
        </UserInfo>

        <IconsContainer>
          <BorderContainer>
            <HexagonBorder width={32} height={32}/>
            <Pointer />

            <MicrofoneIcon />
          </BorderContainer>

          <HeadsetIcon />
          <AddFriendIcon />
        </IconsContainer>
      </UserDiv>
    </BottomDivTag>
  )
}