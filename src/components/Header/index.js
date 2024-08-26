import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { TelegramIcon, TwitterIcon, MenuIcon } from "../../assets/Icons";



import { useWeb3Modal,useWeb3ModalTheme,use } from '@web3modal/wagmi/react'
import { useAccount, useReadContract, useWriteContract } from "wagmi";


const Header = ({ openSidebar, setOpenSidebar }) => {

  const { open, close } = useWeb3Modal()
  const { isConnected,isDisconnected,chain } = useAccount()
  const { address } = useAccount();




  
  const [isTop, setTop] = useState(true);
  useEffect(() => {
    window.onscroll = () => {
      // console.log(window.scrollY)
      if (window.scrollY > 90) {
        setTop(false);
      } else {
        setTop(true);
      }
    };
  });







  return (
    <div
      className={`header-camp flex z-50 top-0 left-0 right-0 w-full min-h-[90px] py-3 ${
        isTop ? "bg-transparent" : "bg-black border-b border-gray-200/30"
      }`}
    >
      <div className="wrapWidth wrap flex items-center justify-between gap-5">
        <div className="left flex items-center">
          <div className="logo-img flex items-center justify-center">
            <Link to="/">
              <img src="../images/ira_logo.png" className="logo" />
            </Link>
          </div>
        </div>
        {/* <div className="center flex items-center justify-center gap-8">
          <NavLink to="/" className="menu-item">
            Home
          </NavLink>
          <a href="#aboutus" className="menu-item">
            About us
          </a>
          <NavLink to="/staking" className="menu-item">
            Staking
          </NavLink>
          
        </div> */}
        <div className="right flex items-center justify-end gap-8">
          <button onClick={() => open()} style={{ backgroundColor:"white" , color:"black"}} className="btn-stack ">
          {!isConnected?("Connect Wallet"):(address.slice(0,4)+"...."+address.slice(39,42))}
          </button>
          {/* <div className="social flex items-center gap-3">
            <div className="icon flex items-center justify-center">
              <TelegramIcon />
            </div>
            <div className="icon flex items-center justify-center">
              <TwitterIcon />
            </div>
          </div> */}
        </div>
        <div
          className="menu-icon flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            setOpenSidebar(true);
          }}
        >
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
