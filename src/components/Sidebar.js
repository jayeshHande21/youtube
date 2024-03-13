import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return !isMenuOpen ? null : (
    <div className="m-1 p-3 border max-w-44">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-5">Subscriptions</h1>
      <ul>
        <li>Dance</li>
        <li>Prodcasts</li>
        <li>Trailers</li>
        <li>Ideas</li>
      </ul>
    </div>
  );
};

export default Sidebar;
