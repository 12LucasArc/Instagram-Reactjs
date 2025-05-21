import React from 'react';
import './Timeline.css';
import profile1 from '/src/assets/reel/picture1.jpg';
import profile2 from '/src/assets/reel/picture2.jpg';
import profile3 from '/src/assets/reel/picture3.jpg';
import profile4 from '/src/assets/reel/picture4.jpg';
import profile5 from '/src/assets/reel/picture5.jpg';
import profile6 from '/src/assets/reel/picture6.jpg';
import profile7 from '/src/assets/reel/picture7.jpg';
import profile8 from '/src/assets/reel/picture8.jpg';
import profile9 from '/src/assets/reel/picture9.jpg';
import profileImg from '/src/assets/reel/picture1.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';

const users = [
    { name: 'Jane Smith', img: profile1 },
    { name: 'A-Reece', img: profile2 },
    { name: 'Blake Adams', img: profile3 },
    { name: 'Wendy Chow', img: profile4 },
    { name: 'Danny Bust', img: profile5 },
    { name: 'Burna Boy', img: profile6 },
    { name: 'Rihanna', img: profile7 },
    { name: 'Beyonce', img: profile8 },
    { name: 'Kabza De Small', img: profile9 },

];

const Timeline = () => {
  return (
    <div className="middleHomeSide">
      {/* Story Block */}
     <div className="storyBlock">
  {users.map((user, index) => (
    <div className="story" key={index}>
      <div className="imageDiv">
        <img className="statusImg" src={user.img} alt={`${user.name}'s profile`} />
      </div>
      <div className="profileName">{user.name}</div>
    </div>
  ))}
</div>

      {/* Post Section */}
      <div className="postSection">
        <div className="post">
          {/* Post Header */}
          <div className="postHeader">
            <img className="postProfileImg" src={profileImg} alt="Jane Smith" />
            <span className="postUsername">Jane Smith</span>
          </div>

          {/* Post Image */}
          <div className="postImage">
            <img src={""} alt="Post content" />
          </div>

          {/* Post Actions */}
          <div className="postActions">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <SendIcon className="postIcon" />
          </div>

          {/* Post Details */}
          <div className="postLikes">1,024 likes</div>
          <div className="postCaption">
            <span className="postUsername">Jane Smith</span> Loving this view! 🌄
          </div>
          <div className="postTime">2 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
