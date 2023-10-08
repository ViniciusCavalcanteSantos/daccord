"use client"

import styled from "styled-components"
import ProfilePicture from "./ProfilePicture"

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

const ProfileInfo = () => {
  return (
    <div>
      <ProfilePicture src="https://media.istockphoto.com/id/1311084168/pt/foto/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?s=2048x2048&w=is&k=20&c=ZlVkWkAHbBJDBrqkHWIqoHmYRxc32KDvCsRsq5oDXPE=" />
    
      <Name>Sophie Fortune</Name>
      <Handle>@sophiefortune</Handle>
    </div>

  )
}

export default ProfileInfo