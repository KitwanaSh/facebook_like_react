import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img className="postProfileImg" src="/assets/Person/1.jpg" alt="" />
            <span className="postUserName">Rodriguez Kitwana</span>
            <span className="postDate">5mins ago</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is my new post.Check that out!</span>
          <img className="postImg" src="/assets/Post/1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className ="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">20 people liked this</span>
          </div>
          <div className ="postBottomRight">
            <span className="postcommentText">8 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
