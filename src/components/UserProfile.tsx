"use client";

import styled from "styled-components"
import ProfilePicture from "./ProfilePicture"

const Aside = styled.aside`
  background: #2C2F48;
  box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.10) inset;
`

const Name = styled.h2`
  color: #FFF;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 4px;
`

const Handle = styled.p`
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`

const UserProfile = () => {
  return (
    <Aside>
      <div>
        <ProfilePicture src="https://media.istockphoto.com/id/1311084168/pt/foto/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?s=2048x2048&w=is&k=20&c=ZlVkWkAHbBJDBrqkHWIqoHmYRxc32KDvCsRsq5oDXPE=" />
      
        <Name>Sophie Fortune</Name>
        <Handle>@sophiefortune</Handle>
      </div>


    </Aside>
  )
}

export default UserProfile