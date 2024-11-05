"use client";

import styled from "styled-components"
import ProfileInfo from "./ProfileInfo";
import MailIcon from "./icons/MailIcon";
import BellIcon from "./icons/BellIcon";
import ChatIcon from "./icons/ChatIcon";
import SettingsIcon from "./icons/SettingsIcon";

const Aside = styled.aside`
  background: #2C2F48;
  box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.10) inset;
`

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px 12px;
  box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.10) inset;

  > * {
    cursor: pointer;
  }
`

const UserProfile = () => {
  return (
    <Aside>
      <Options>
        <MailIcon />
        <BellIcon />
        <ChatIcon />
        <SettingsIcon />
      </Options>

      <ProfileInfo />
    </Aside>
  )
}

export default UserProfile