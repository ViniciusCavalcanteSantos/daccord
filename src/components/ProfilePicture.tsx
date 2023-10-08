"use client"

import Image from "next/image";
import CustomBorder from "./icons/CustomBorder";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 110px;
  height: 120px;
  margin: 40px auto 30px;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: path("M44 4.35085C50.8068 0.420932 59.1932 0.420932 66 4.35085L97.6936 22.6491C104.5 26.5791 108.694 33.8419 108.694 41.7017V78.2983C108.694 86.1581 104.5 93.4209 97.6936 97.3509L66 115.649C59.1932 119.579 50.8068 119.579 44 115.649L12.3064 97.3509C5.4996 93.4209 1.30642 86.1581 1.30642 78.2983V41.7017C1.30642 33.8419 5.4996 26.5791 12.3064 22.6491L44 4.35085Z");
  }

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
      <Image
        src={src}
        alt="Foto de perfil"
        width={110}
        height={120}
      />
           
      <svg
        width={110}
        height={120}
        viewBox="0 0 110 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44 4.35085C50.8068 0.420932 59.1932 0.420932 66 4.35085L97.6936 22.6491C104.5 26.5791 108.694 33.8419 108.694 41.7017V78.2983C108.694 86.1581 104.5 93.4209 97.6936 97.3509L66 115.649C59.1932 119.579 50.8068 119.579 44 115.649L12.3064 97.3509C5.4996 93.4209 1.30642 86.1581 1.30642 78.2983V41.7017C1.30642 33.8419 5.4996 26.5791 12.3064 22.6491L44 4.35085Z"
          stroke="url(#paint0_linear_302_2)"
          strokeWidth={2}
        />
        <defs>
          <linearGradient
            id="paint0_linear_302_2"
            x1="17.5"
            y1={7}
            x2={99}
            y2={112}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A73EE7" />
            <stop offset={1} stopColor="#00EBFF" />
          </linearGradient>
        </defs>
      </svg>

      <CustomBorder />
    </Container>

  )
}

export default ProfilePicture