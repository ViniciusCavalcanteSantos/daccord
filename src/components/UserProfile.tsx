"use client";

import styled from "styled-components"
import ProfileInfo from "./ProfileInfo";
import MailIcon from "./icons/MailIcon";
import BellIcon from "./icons/BellIcon";
import ChatIcon from "./icons/ChatIcon";
import SettingsIcon from "./icons/SettingsIcon";
import HexagonBorder from "./HexagonBorder";

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

const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin: 28px 16px 16px;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 400;

  span {
    color: rgba(255, 255, 255, 0.25);
  }
`

const Cards = styled.ul`
  display: grid;
  gap: 8px;
  padding: 0 16px;
`

const Card = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  background: #393D5D;
  border-radius: 5px;
`

const CardInfo = styled.div`
  margin-left: 12px;

  h3 {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }

  p {
    color: rgba(255, 255, 255, 0.25);
    font-size: 13px;
  }
`

const UserProfile = () => {
  const userProfile1 = "https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=8ZanqZPUGnq35YEyoEN9706LLYZYGf3JVu7BnsJ28hc="
  const userProfile2 = "https://media.istockphoto.com/id/1437816897/pt/foto/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring-or.jpg?s=2048x2048&w=is&k=20&c=mkmHzbsIlTMJCGDlBD4PAP5MmCaRD05baBA9ECQMGo4="
  const userProfile3 = "https://media.istockphoto.com/id/1407759041/pt/foto/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=X22vaOhrm7VMb09TfjMpEwbZuDN7JL3cojVaJDjcU7w=";
  const userProfile4 = "https://media.istockphoto.com/id/1325359218/pt/foto/portrait-of-a-young-african-man-at-studio-high-fashion-male-model-in-colorful-bright-neon.jpg?s=2048x2048&w=is&k=20&c=NBpZFJmQLN4a-unXU5H5iQniX7m8sRPmJHyUO7yfDhE=";

  return (
    <Aside>
      <Options>
        <MailIcon />
        <BellIcon />
        <ChatIcon />
        <SettingsIcon />
      </Options>

      <ProfileInfo />

      <Title>
        New Members

        <span>See All</span>
      </Title>

      <Cards>
        <Card>
          <HexagonBorder src={userProfile1} width={44} height={44} color1="#FFFFFF" color2="#FFFFFF"/>

          <CardInfo>
            <h3>Anne Couture</h3>
            <p>5 min ago</p>
          </CardInfo>
        </Card>

        <Card>
          <HexagonBorder src={userProfile2} width={44} height={44} color1="#FFFFFF" color2="#FFFFFF"/>

          <CardInfo>
            <h3>Miriam Soleil</h3>
            <p>20 min ago</p>
          </CardInfo>
        </Card>

        <Card>
          <HexagonBorder src={userProfile3} width={44} height={44} color1="#FFFFFF" color2="#FFFFFF"/>

          <CardInfo>
            <h3>Marie Laval</h3>
            <p>35 min ago</p>
          </CardInfo>
        </Card>

        <Card>
          <HexagonBorder src={userProfile4} width={44} height={44} color1="#FFFFFF" color2="#FFFFFF"/>

          <CardInfo>
            <h3>Mark  Morain</h3>
            <p>40 min ago</p>
          </CardInfo>
        </Card>
      </Cards>
    </Aside>
  )
}

export default UserProfile