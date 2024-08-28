import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon } from "../../assets/Icons";



import { useWeb3Modal,useWeb3ModalTheme,use } from '@web3modal/wagmi/react'
import { useAccount, useReadContract, useWriteContract } from "wagmi";


const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  console.log("openSidebar....", openSidebar);
  const navBarItems = [
    { lbl: "Home", slug: "/" },
    
  ];

  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.body.style.overflowY = "auto";
      setOpenSidebar(false);
    });
  }, []);

  
  const { open, close } = useWeb3Modal()
  const { isConnected,isDisconnected,chain } = useAccount()
  const { address } = useAccount();




  return (
    <div
      className={`sidebar-s fixed rel anim ${openSidebar ? "show" : "hide"}`}
    >
      <div
        className={`side-block flex col anim ${openSidebar ? "show" : "hide"}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="hdr flex items-center justify-between gap-2">
          <div className="hdr-tag">
          <Link to="https://defi-ira.com/">

            <img src="./images/ira_logo.png" className=" h-14" />
          </Link>
          </div>
          <div
            className="icon-close flex aic jc"
            onClick={(e) => {
              setOpenSidebar(false);
            }}
          >
            <CloseIcon />
          </div>
        </div>
        <div>
          <div className="items flex aic flex-col">
            <>
              {navBarItems.map((item, index) => (
                <Link
                  to={item.slug}
                  className={`list-item flex `}
                  onClick={(e) => {
                    setOpenSidebar(false);
                  }}
                >
                  {/* <div className="icon flex items-start justify-center mr-3">
                  {item.icon}
                </div> */}
                  <div className="li">{item.lbl}</div>
                </Link>
              ))}
            </>
            <button
              
              className="btn-stack  w-full rounded-md inter h-10" style={{ backgroundColor:"white" , color:"black"}}
              onClick={() => open()}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
