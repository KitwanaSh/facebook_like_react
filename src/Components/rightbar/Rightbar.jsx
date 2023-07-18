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
      <>
        <h4 className="rightbarTitle">User info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Goma Town</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Tokyo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/Person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kitwana Ezechiel</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/Person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kitwana Ezechiel</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/Person/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kitwana Ezechiel</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/Person/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kitwana Ezechiel</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/Person/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kitwana Ezechiel</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/Person/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Kitwana Ezechiel</span>
          </div>
        </div>
      </>      
      )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  )
}
