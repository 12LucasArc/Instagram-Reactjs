import React from 'react';
import './RightSidebar.css';
import user1 from '/src/assets/users/user1.jpg';
import user2 from '/src/assets/users/user2.jpg';
import user3 from '/src/assets/users/user3.jpg';

const suggestions = [
  { name: 'alex99', fullName: 'Alex Johnson', img: user1 },
  { name: 'lisa_m', fullName: 'Lisa Monroe', img: user2 },
  { name: 'dev_jay', fullName: 'Jay Patel', img: user3 },
];

const RightSidebar = () => {
  return (
    <div className="rightSidebar">
      <h3>Suggested for you</h3>
      {suggestions.map((user, index) => (
        <div className="suggestion" key={index}>
          <img src={user.img} className="suggestionImg" alt={user.name} />
          <div className="suggestionText">
            <div className="username">{user.name}</div>
            <div className="fullname">{user.fullName}</div>
          </div>
          <button className="followBtn">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
