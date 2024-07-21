import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "../../assets/images/logo.jpg";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link to={"/"}>
        <img
          width={50}
          height={50}
          src={Logo}
          alt="logo"
        />
      </Link>
      <div className="flex flex-col gap-4 bg-[var(--gray)] p-2 rounded-md">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <HomeIcon
              fontSize="large"
              sx={{ color: "white" }}
            />
            <div className="text-white font-bold">Home</div>
          </div>
        </Link>
        <Link to={"/search"}>
          <div className="flex items-center gap-2">
            <SearchIcon
              fontSize="large"
              sx={{ color: "white" }}
            />
            <div className="text-white font-bold">Search</div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 bg-[var(--gray)] rounded-md bg-black">
        <Link to={"/track"}>
          <div className="flex items-center gap-2 p-2">
            <QueueMusicIcon
              fontSize="large"
              sx={{ color: "white" }}
            />
            <div className="text-white font-bold">Playlist</div>
          </div>
        </Link>
        <div
          className="overflow-y-auto scrollbar-hide flex flex-col gap-2 py-4 bg-[var(--black-color)]"
          style={{ height: "200px" }}
        >
          <div
            className="flex flex-col gap-2 bg-black p-2 rounded-md"
            style={{ border: "white solid 1px" }}
          >
            <div className="text-white font-bold">Create your first playlist</div>
            <div className="text-white font-bold rowItemSubTitle">It's easy, we'll help you</div>
            <button className="mt-2 button rounded-full px-4 py-2 bg-white font-bold w-max">Create playlist</button>
          </div>
          <div
            className="flex flex-col gap-2 bg-black p-2 rounded-md"
            style={{ border: "white solid 1px" }}
          >
            <div className="text-white font-bold">Let's find some podcast to follow.</div>
            <div className="text-white font-bold rowItemSubTitle">We'll will keep you updated on new episodes</div>
            <button className="mt-2 button rounded-full px-4 py-2 bg-white font-bold w-max">Browse podcasts</button>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 py-2 bg-black">
          <li className="rowItemSubTitle text-white">Legal</li>
          <li className="rowItemSubTitle text-white">Safety&Private Center</li>
          <li className="rowItemSubTitle text-white">Private Policy</li>
          <li className="rowItemSubTitle text-white">Cookies</li>
          <li className="rowItemSubTitle text-white">About Ads</li>
          <li className="rowItemSubTitle text-white">Accessibility</li>
          <li className="rowItemSubTitle text-white">Cookies</li>
        </ul>
        <div
          className="flex items-center rounded-full w-max p-2 text-white font-bold hover:scale-105 cursor-pointer transition-all"
          style={{ border: "white solid 1px" }}
        >
          <LanguageIcon />
          English
        </div>
      </div>
    </div>
  );
};

export default SideBar;
