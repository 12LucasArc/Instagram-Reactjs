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
import post1 from '../../assets/posts/post1.jpg';
import post2 from '../../assets/posts/post2.jpg';
import post3 from '../../assets/posts/post3.jpg';
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
            <img className="postProfileImg" src={profile5} alt="Danny Bust" />
            <span className="postUsername">Danny Bust</span>
          </div>

          {/* Post Image */}
          <div className="postImage">
            <img src={post1} alt="Post content" />
          </div>

          {/* Post Actions */}
          <div className="postActions">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <SendIcon className="postIcon" />
          </div>

          {/* Post Details */}
          <div className="postLikes">3,024 likes</div>
          <div className="postCaption">
            <span className="postUsername">Danny Bust</span> Loving this view! 🌄
          </div>
          <div className="postTime">2 hours ago</div>
        </div>
      </div>
      <div className="postSection">
        <div className="post">
          {/* Post Header */}
          <div className="postHeader">
            <img className="postProfileImg" src={profile7} alt="Beyonce" />
            <span className="postUsername">Beyonce</span>
          </div>

          {/* Post Image */}
          <div className="postImage">
            <img src={post2} alt="Post content" />
          </div>

          {/* Post Actions */}
          <div className="postActions">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <SendIcon className="postIcon" />
          </div>

          {/* Post Details */}
          <div className="postLikes">2,4m likes</div>
          <div className="postCaption">
            <span className="postUsername">Beyonce</span> Love my new Gucci purse! 👜
          </div>
          <div className="postTime">18 hours ago</div>
        </div>
      </div><div className="postSection">
        <div className="post">
          {/* Post Header */}
          <div className="postHeader">
            <img className="postProfileImg" src={profile2} alt="A-Reece" />
            <span className="postUsername">A-Reece</span>
          </div>

          {/* Post Image */}
          <div className="postImage">
            <img src={post3} alt="Post content" />
          </div>

          {/* Post Actions */}
          <div className="postActions">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <SendIcon className="postIcon" />
          </div>

          {/* Post Details */}
          <div className="postLikes">68 435 likes</div>
          <div className="postCaption">
            <span className="postUsername">A-Reece</span> Got my new Whip, German Engineering! 🚗
          </div>
          <div className="postTime">2 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
