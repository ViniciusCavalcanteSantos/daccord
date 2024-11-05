"use client"

import CustomBorder from "./icons/CustomBorder";
import styled from "styled-components";
import HexagonBorder from "./HexagonBorder";

const Container = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 40px auto 30px;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

function ProfilePicture({src}: {src: string}) {
  return (
    <Container>
      <HexagonBorder src={src} width={120} height={120}/>

      <CustomBorder />
    </Container>

  )
}

export default ProfilePicture