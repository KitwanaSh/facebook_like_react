import "./profile.css"
import TopBar from '../../Components/topBar/TopBar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar'
import Feed from '../../Components/feed/Feed'

export default function Profile() {
	return (
		<>
		    <TopBar />
		    <div className="profile">
		    	<Sidebar />
		    	<div className="profileRight">
		      		<div className="profileRightTop">
		      			<div className="profileCover">
			      			<img class="profileCoverImg" src="assets/Post/3.jpg" alt="" />
			      			<img class="profileUserImg" src="assets/Person/1.jpg" alt="" />
		      			</div>
		      			<div className="profileInfo">
		      				<h4 className="profileInfoName">The ging dog</h4>
		      				<span className="profileInfoDesc">The element to discribe th future.</span>
		      			</div>
		      		</div>
		      		<div className="profileRightBottom">
			      		<Feed />
			      		<Rightbar profile />
		      		</div>
		      	</div>
		    </div>
    	</>
	)
}