import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";

import { FaBell } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Navbarx = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <div className="relative z-10">
      <div className={`bg-green flex py-2 justify-between`}>
        <div className="flex gap-x-4 px-4 align-middle">
          <RxHamburgerMenu className="text-[#fff] w-6 h-6" onClick={()=> {setNavOpen(!navOpen)}}/>
          <p className="text-[#fff] text-2xl">Bhaashadaan</p>
        </div>

        <div className="flex gap-x-4">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://imgs.search.brave.com/_86LSqJtcq6Q0XZ-4aIym7dO5vn-orLWSl2G9_PZPew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93aGF0/aWZnYW1pbmcuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzExL0Z1bm55LW5h/cnV0by1hbmltZS1Q/RlAuanBn",
                }}
                className="transition-transform"
                description="@admin"
                name="Admin"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">@admin</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
          <FaBell 
            className="m-2 mr-4"
          />
        </div>
      </div>
      <div>
        <Sidebar expanded = {navOpen} />
      </div>
    </div>
  );
};

export default Navbarx;
