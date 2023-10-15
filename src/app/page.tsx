"use client";

import Image from "next/image";
import home1 from "@/assets/home-1.png";
import styled from "styled-components";
import Cards from "@/components/Cards";

const Container = styled.div`
  padding: 24px;
  width: 100%;
`

const Intro = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;

  > img {
    width: 100%;
    max-width: 668px;
    border-radius: 20px;
    user-select: none;
    pointer-events: none;
  }
`

const IntroTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

export default function Home() {
  return (
    <Container>
      <Intro>
        <Image src={home1} alt="" width={668} height={180}/>

        <IntroTitle>Find Your Community on Daccord</IntroTitle>
      </Intro>

      <Cards />
    </Container>
  )
}
