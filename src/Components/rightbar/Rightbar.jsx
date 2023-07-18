import "./rightbar.css"
import {users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
           <b>Brigitter Ena</b> and <b>4 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
      )
  }

  const ProfileRightBar = () => {
    return(
      <div>Hey profile</div>      
      )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightBar />
      </div>
    </div>
  )
}
