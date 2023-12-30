import React from "react";
import "../Styles/profiledashboard.css";
import profilepic from "../assets/Intersect.png";
import graph1 from "../assets/Group 3.png";
import graph2 from "../assets/Group 4.png";
import share from "../assets/image 3.png";
import upload from "../assets/icons8-upload-53 1.png";

const ProfileDashboard = () => {
  return (
    <div className="container profile-parent">
      <div className="profile-content">
        <div className="left-content">
          <div className="container profile-info">
            <img src={profilepic} alt="" />
            <div className="info">
              <h5>Nikhil Singh</h5>
              <p className="email">nikhilsingh9283@gmail.com</p>
              <a href="/">Edit Profile</a>
            </div>
          </div>

          <p className="bio">
            Embarking on a visual journey with GraphMaster Pro has been nothing
            short of exhilarating. As a user, I've unleashed the power of data
            through a seamless and intuitive interface. From crafting simple yet
            powerful bar charts to diving into the intricacies of network
            graphs, this platform has become my canvas for transforming
            information into visual masterpieces.
          </p>
          <p className="plan">PRO</p>
          <p className="status">Expiring in 2 Months</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="650"
          viewBox="0 0 2 475"
          fill="none"
        >
          <path
            d="M1 1L0.999979 474"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div className="container right-content">
          <h3>Recent Graphs</h3>
          <img src={graph1} alt="" />
          <img src={graph2} alt="" />
          <div className="graph-created">
            <h5>Graph Created</h5>
            <h2>23</h2>
          </div>
          <div className="actions">
            <div className="share">
              <img src={share} alt="" />
              <p>Share Graphs</p>
            </div>
            <div className="upload">
              <img src={upload} alt="" />
              <p>Upload Papers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container profile-navigation">
        <ul>
          <a href="/" className="link"> <li>Profile</li></a>
          <a href="/settings" className="link"><li>Account Sttings</li></a>
          <a href="/pricing" className="link"><li>Subscriptions</li></a>
          <a href="/grpah" className="link"><li>Graphs</li></a>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDashboard;
