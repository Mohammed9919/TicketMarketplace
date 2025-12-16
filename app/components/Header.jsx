"use client";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";

// mui
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" bg-white shadow-md lg:px-15">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src="/Images/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>
        </div>
        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center gap-2 ml-auto w-full lg:w-fit">
          <IconButton>
            <ShoppingCartIcon style={{ fontSize: "30px" }} />
          </IconButton>
          <IconButton>
            <Image
            alt="Travis Howard"
            src="/Images/avatar.jpg"
            width={30}
            height={30}
            className="rounded-full"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button"
                }
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </IconButton>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
