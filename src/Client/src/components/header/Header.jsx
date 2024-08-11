import React, { useEffect, useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import SearchInput from "../searchInput/index";
import BellIcon from "../Icons/BellIcon";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { logout } from "../../../../redux/slice/userInformationSlice";
import LanguageContext from "../../contexts/LanguageContext";
import NavButton from "../directional/Button";
import { SongNew } from "../../../../Admin/src/services/song";

const user = (state) => state.userInformation.userInformation;
const HeaderStateInit = createSelector([user], (user) => ({
  user: user,
}));

const Header = () => {
  const { user } = useSelector(HeaderStateInit);
  const dispatch = useDispatch();
  const { translations } = useContext(LanguageContext);
  const history = useHistory();

  const [hasNewSongs, setHasNewSongs] = useState(false);

  useEffect(() => {
    const checkNewSongs = async () => {
      try {
        const result = await SongNew();
        setHasNewSongs(result.length > 0);
      } catch (error) {
        console.error(error);
      }
    };

    checkNewSongs();
  }, []);

  const handleClick = () => {
    setHasNewSongs(false);
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleForward = () => {
    history.goForward();
  };

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const handleLogOut = () => {
    localStorage.clear("token");
    dispatch(logout());
  };

  return (
    <div className="w-100 bg-black">
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-2">
          <NavButton
            onClick={handleBack}
            disabled={false} // Cập nhật trạng thái disable nếu cần
            title="Quay lại"
            icon={ArrowBackIosIcon}
          />
          <NavButton
            onClick={handleForward}
            disabled={false} // Cập nhật trạng thái disable nếu cần
            title="Tiếp theo"
            icon={ArrowForwardIosIcon}
          />
          <SearchInput />
        </div>

        <div className="flex gap-2">
          <Link to="/content" onClick={handleClick}>
            <div className="relative mt-3 p-2 hover:bg-gray-600 rounded-full">
              <BellIcon className="w-6 h-6 text-white" />
              {hasNewSongs && (
                <span className="absolute top-1 left-6 bg-red-500 w-2.5 h-2.5 rounded-full ring-2 ring-gray-800" />
              )}
            </div>
          </Link>
          {user && user?.role === "admin" && (
            <Link to="/admin">
              <div className="p-4 rounded-full text-white bg-gradient-to-b from-gray-600 to-black">
                {translations.admin}
              </div>
            </Link>
            )}
            {user.username && (
              <div className="text-white flex items-center justify-center">
                {translations.hello} {user?.username}
              </div>
            )}
            {user.username && (
              <button
                onClick={handleLogOut}
                className="flex items-center justify-center p-4 rounded-full bg-white text-black"
              >
                {translations.logout}
              </button>
            )}
            {!user.username && (
              <div className="flex gap-4">
                <Link to="/register">
                  <div className="p-4 rounded-full text-white bg-gradient-to-b from-gray-600 to-black">
                    {translations.register}
                  </div>
                </Link>
                <Link to="/login">
                  <div className="p-4 rounded-full font-bold bg-white">
                    {translations.login}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;