import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
// src/header/Header.jsx
import { useHistory, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import SearchInput from "../searchInput/index";
import BellIcon from "../Icons/BellIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { logout } from "../../../../redux/slice/userInformationSlice";

const user = state => state.userInformation.userInformation;
const HeaderStateInit = createSelector([user], user => ({
  user: user,
}));

const Header = () => {
  const { user } = useSelector(HeaderStateInit);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const handleLogOUt = () => {
    localStorage.clear("token");
    dispatch(logout());
  };

  return (
    <div className="w-100 bg-black">
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="rounded-full p-2 bg-gray-800 text-gray-500 hover:text-white cursor-pointer">
            <ArrowBackIosIcon />
          </div>
          <div className="rounded-full p-2 bg-gray-800 text-gray-500 hover:text-white cursor-pointer">
            <ArrowForwardIosIcon />
          </div>
          <SearchInput />
        </div>

        <div className="flex gap-2">
          <Link to="/content">
            <div className="mt-3 hover:bg-gray-600 rounded-full">
              <BellIcon />
            </div>
          </Link>
          {user && user?.role === "admin" && (
            <Link to="/admin">
              <div className="p-4 rounded-full text-white bg-gradient-to-b from-gray-600 to-black">Quản trị</div>
            </Link>
          )}
          {user.username && (
            <div className="text-white flex items-center justify-center">Xin chào {user?.username}</div>
          )}
          {user.username && (
            <button
              onClick={handleLogOUt}
              className=" flex items-center justify-center  p-4 rounded full bg-white text-black"
            >
              Đăng xuất
            </button>
          )}
          {!user.username && (
            <div className="flex gap-4">
              <Link to="/register">
                <div className="p-4 rounded-full text-white bg-gradient-to-b from-gray-600 to-black">Register</div>
              </Link>
              <Link to="/login">
                <div className="p-4 rounded-full font-bold bg-white">Login</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
