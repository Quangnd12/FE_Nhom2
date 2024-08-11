import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "../../assets/images/logo.jpg";
import LanguageContext from "../../contexts/LanguageContext";

const SideBar = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  return (
    <div className="flex flex-col gap-4">
      <Link to={"/"}>
        <img width={50} height={50} src={Logo} alt="logo" />
      </Link>
      <div className="flex flex-col gap-4 bg-[var(--gray)] p-2 rounded-md">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <HomeIcon fontSize="large" sx={{ color: "white" }} />
            <div className="text-white font-bold">{translations.home}</div>
          </div>
        </Link>
        <Link to={"/search"}>
          <div className="flex items-center gap-2">
            <SearchIcon fontSize="large" sx={{ color: "white" }} />
            <div className="text-white font-bold">{translations.search}</div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 bg-[var(--gray)] rounded-md bg-black">
        <Link to={"/track"}>
          <div className="flex items-center gap-2 p-2">
            <QueueMusicIcon fontSize="large" sx={{ color: "white" }} />
            <div className="text-white font-bold">{translations.playlist}</div>
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
            <div className="text-white font-bold">
              {translations.createPlaylist}
            </div>
            <div className="text-white font-bold rowItemSubTitle">
              {translations.easyHelp}
            </div>
            <button className="mt-2 button rounded-full px-4 py-2 bg-white font-bold w-max">
              {translations.createButton}
            </button>
          </div>
          <div
            className="flex flex-col gap-2 bg-black p-2 rounded-md"
            style={{ border: "white solid 1px" }}
          >
            <div className="text-white font-bold">
              {translations.findPodcast}
            </div>
            <div className="text-white font-bold rowItemSubTitle">
              {translations.updatePodcasts}
            </div>
            <button className="mt-2 button rounded-full px-4 py-2 bg-white font-bold w-max">
              {translations.browseButton}
            </button>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 py-2 bg-black">
          <li className="rowItemSubTitle text-white">{translations.legal}</li>
          <li className="rowItemSubTitle text-white">{translations.safety}</li>
          <li className="rowItemSubTitle text-white">{translations.privacy}</li>
          <li className="rowItemSubTitle text-white">{translations.cookies}</li>
          <li className="rowItemSubTitle text-white">{translations.ads}</li>
          <li className="rowItemSubTitle text-white">
            {translations.accessibility}
          </li>
          <li className="rowItemSubTitle text-white">{translations.cookies}</li>
        </ul>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleLanguage}
        >
          <LanguageIcon fontSize="large" sx={{ color: "white" }} />
          <div className="text-white font-bold">{translations.language}</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
