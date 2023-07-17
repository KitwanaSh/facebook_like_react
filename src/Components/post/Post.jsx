import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post({post}) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img className="postProfileImg" src="/assets/Person/1.jpg" alt="" />
            <span className="postUserName">{post.userName}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className ="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">{post.like} people liked this</span>
          </div>
          <div className ="postBottomRight">
            <span className="postcommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
