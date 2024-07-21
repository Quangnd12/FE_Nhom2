import React from "react";

import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-100 bg-[var(--black-color)]">
      <div className=" p-4 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="rounded-full text-gray-500 hover:text-white cursor-pointer">
            <ArrowBackIosIcon />
          </div>
          <div className="rounded-full text-gray-500 hover:text-white cursor-pointer">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={"/register"}>
            <div
              style={{ background: "linear-gradient(to bottom, #888888, #000000)" }}
              className="p-4 rounded-full text-white"
            >
              Đăng kí
            </div>
          </Link>
          <Link to={"/login"}>
            <div className="p-4 rounded-full font-bold bg-white">Đăng nhập</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
