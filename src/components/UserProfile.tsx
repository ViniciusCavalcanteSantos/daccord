import ProfilePicture from "./ProfilePicture"
import styled from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <aside className={styled.sidebar}>
      <div className={styled.profile}>
        <ProfilePicture src="https://media.istockphoto.com/id/1311084168/pt/foto/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?s=2048x2048&w=is&k=20&c=ZlVkWkAHbBJDBrqkHWIqoHmYRxc32KDvCsRsq5oDXPE=" />
      
        <h2 className={styled.name}>Sophie Fortune</h2>
        <p className={styled.handle}>@sophiefortune</p>
      </div>


    </aside>
  )
}

export default UserProfile