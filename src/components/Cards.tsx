"use client"

import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import FeaturedCard1 from "@/assets/featured-card-1.png"
import FeaturedCard2 from "@/assets/featured-card-2.png"
import PopularCard1 from "@/assets/popular-card-1.png"
import PopularCard2 from "@/assets/popular-card-2.png"
import MemberIcon from "@/assets/member.png"
import MemberIconOnline from "@/assets/member-online.png"

const CardContainer = styled.div`
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 12px;

  > a {
    color: rgba(255, 255, 255, 0.55);
    text-align: right;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

const Title = styled.h3`
  color: #FFF;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  margin-bottom: 32px;
`

const CardHorizontal = styled.div`
  display: flex;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.50); 

  img {
    user-select: none;
    pointer-events: none;
  }

  h4 {
    left: 12px;
    bottom: 74px;
  }

  p {
    left: 12px;
    bottom: 34px;
  }

  .CardInfo {
    left: 12px;
    right: 12px;
    bottom: 12px;
  }
`

const CardVertical = styled.div`
  display: flex;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.50); 

  img {
    user-select: none;
    pointer-events: none;
  }

  h4 {
    left: 148px;
    top: 20px;
  }

  p {
    left: 148px;
    right: 12px;
    top: 54px;
  }

  .CardInfo {
    left: 148px;
    top: 126px;
  }
`

const CardTitle = styled.h4`
  position: absolute;
  font-size: 22px;
  font-weight: 600;
`

const CardSubtitle = styled.p`
  position: absolute;
  color: rgba(255, 255, 255, 0.55);
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
`

const CardInfo = styled.div.attrs({
  className: "CardInfo"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  color: rgba(255, 255, 255, 0.25);
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

const Cards = () => {
  return (
    <>
      <CardContainer>
        <CardHeader>
          <Title>Featured Community</Title>

          <Link href="/see-all">See All</Link>
        </CardHeader>

        <CardWrapper>
          <CardHorizontal>
            <Image src={FeaturedCard1} alt="" width={320}/>

            <CardTitle>Virtual Reality</CardTitle>
            <CardSubtitle>A community for VR and novices alike, regular and friendly chat.</CardSubtitle>

            <CardInfo>
              <span>
                <Image src={MemberIcon} alt="" width={14} height={14}/>

                5,678 Online
              </span>

              <span>
                <Image src={MemberIconOnline} alt="" width={14} height={14}/>

                345,678 Members
              </span>
            </CardInfo>
          </CardHorizontal>

          <CardHorizontal>
            <Image src={FeaturedCard2} alt="" width={320}/>

            <CardTitle>Game Play</CardTitle>
            <CardSubtitle>Always a new challenge. Great place to make new friends.</CardSubtitle>

            <CardInfo>
              <span>
                <Image src={MemberIcon} alt="" width={14} height={14}/>

                28,628 Online
              </span>

              <span>
                <Image src={MemberIconOnline} alt="" width={14} height={14}/>

                527,955 Members
              </span>
            </CardInfo>
          </CardHorizontal>
        </CardWrapper>

        <CardHeader>
          <Title>Popular Right Now</Title>

          <Link href="/see-all">See All</Link>
        </CardHeader>

        <CardWrapper>
          <CardVertical>
            <Image src={PopularCard1} alt="" width={320}/>

            <CardTitle>3D Art</CardTitle>
            <CardSubtitle>A great place to discuss art.</CardSubtitle>

            <CardInfo>
              <span>
                <Image src={MemberIconOnline} alt="" width={14} height={14}/>

                345,678 Members
              </span>
            </CardInfo>
          </CardVertical>

          <CardVertical>
            <Image src={PopularCard2} alt="" width={320}/>

            <CardTitle>NFT</CardTitle>
            <CardSubtitle>An NFT community so that everyone can share their NFTs.</CardSubtitle>

            <CardInfo>
              <span>
                <Image src={MemberIconOnline} alt="" width={14} height={14}/>

                887,789 Members
              </span>
            </CardInfo>
          </CardVertical>
        </CardWrapper>
      </CardContainer>
    </>
  )
}

export default Cards