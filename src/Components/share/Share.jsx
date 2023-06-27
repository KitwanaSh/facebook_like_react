import"./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/Person/1.jpg" alt="" />
          <input placeholder="What's in you mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato"  className="shareIcon"/>
              <span class="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue"  className="shareIcon"/>
              <span class="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green"  className="shareIcon"/>
              <span class="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod"  className="shareIcon"/>
              <span class="shareOptionText">Feelings</span>
            </div>
          </div>
        <button className="shareButton">Share</button>
      </div>
      </div>
    </div>
  )
}
