import TopBar from '../../Components/topBar/TopBar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/Rightbar'
import Feed from '../../Components/feed/Feed'

import "./home.css"

export default function Home() {
  return (
    <>
    <TopBar />
    <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
    </>
  )
}
