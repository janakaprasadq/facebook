import React from "react";
import "./styles/NavBar.scss";
import home from "./Assets/home.png";
import video from "./Assets/video.png";
import game from "./Assets/game.png";
import market from "./Assets/marketplace.png";
import groups from "./Assets/team.png";

import menu from "./Assets/menu.png";
import bell from "./Assets/bell.png";
import messenger from "./Assets/messenger.png";
import profile from "./Assets/man.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          <div className="col-6 col-md-4 d-flex align-items-center left-nav">
            <img
              className="fb-logo"
              src="https://i.pinimg.com/originals/66/0b/cb/660bcb3e9408cfa1747d2d6e4c8c4526.png"
              alt="Facebook Logo"
            />
            <form className="search-form d-none d-md-block d-sm-block d-xs-block w-100">
              <input
                className="form-control"
                type="search"
                placeholder="Search Facebook"
                aria-label="Search"
              />
            </form>
          </div>

          <div className="col-6 col-md-8 right-nav d-flex justify-content-end align-items-center">
            <ul className="nav-item-1 d-none d-md-flex">
              <li>
                <img title="Home" src={home} alt="Home" />
              </li>
              <li>
                <img title="Video" src={video} alt="Video" />
              </li>
              <li>
                <img title="Marketplace" src={market} alt="Marketplace" />
              </li>
              <li>
                <img title="Groups" src={groups} alt="Groups" />
              </li>
              <li>
                <img title="Gaming" src={game} alt="Game" />
              </li>
            </ul>

            <ul className="nav-item-2 d-flex">
              <li>
                <img title="Menu" src={menu} alt="Menu" />
              </li>
              <li>
                <img title="Notification" src={bell} alt="Bell" />
              </li>
              <li>
                <img title="Messenger" src={messenger} alt="Messenger" />
              </li>
              <li>
                <img title="Profile" src={profile} alt="Profile" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
