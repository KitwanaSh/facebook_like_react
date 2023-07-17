import { useState } from "react"

import "./post.css"
import {MoreVert} from "@material-ui/icons"
import { users } from "../../dummyData"

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img className="postProfileImg" src={users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
            <span className="postUserName">{users.filter((u) => u.id === post?.userId)[0].userName}</span>
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
            <img className="likeIcon" src="/assets/like.png" alt="" onClick={handleLike} />
            <img className="likeIcon" src="/assets/heart.png" alt="" onClick={handleLike} />
            <span className="postLikeCounter">{like} people liked this</span>
          </div>
          <div className ="postBottomRight">
            <span className="postcommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
