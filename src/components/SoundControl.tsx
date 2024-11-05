"use client"

import styled from "styled-components"
import Image from "next/image"

import soundWave from "@/assets/sound-wave.png"
import soundWaveBackground from "@/assets/sound-wave-background.png"
import React, { ReactElement } from "react"

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
  width: 320px;
  height: 84px;
  background-color: #1D203E;

  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.10) inset;
`

export default function SoundControl() {
  return(
    <BottomDivTag>
      <SoundDiv>
        <Image src={soundWaveBackground} alt="" width={316} height={56}/>
        <Image src={soundWave} alt="" width={248} height={36}/>
      </SoundDiv>

      <UserDiv>
        
      </UserDiv>
    </BottomDivTag>
  )
}