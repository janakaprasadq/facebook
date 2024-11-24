import "./styles/Header.scss";
import React from "react";

const Header = ({ user }) => {
  return (
    <div className="header">
      <img src={user.coverImage} alt="Profile" className="cover-pic" />

      <div className="outer">
        <img
          src="https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/292397171_2595004373967888_2731709972351114934_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFve948_-ZIFSxzLhaHtAbhC9g_N2ol3roL2D83aiXeukYoKwl36oWjJgm2zKck57_8JqanjTSeKVAcYA7WaBG3&_nc_ohc=VbZpiiwvRJEQ7kNvgHrETHS&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=AMsXDpp5335pySgOlgXsSZ3&oh=00_AYCcfZlqTiNhbty_f5yACxKqCeR2Kez2Een3EJjnk8eC9A&oe=6747EE3F"
          className="profilePicture"
          alt="Cover-Image"
        />

        <div>
          <div className="inner">
            <h2>{user.name}</h2>
            <div className="like-follow">
              <h6>
                15M Likes <b>.</b>
              </h6>
              <h6>15M followers</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs">
        <div>
          <span>Posts</span>
          <span>About</span>
          <span>Mentions</span>
          <span>Reels</span>

          <span>Photos</span>
          <span>Videos</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
