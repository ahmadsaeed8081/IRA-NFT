import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon } from "../../assets/Icons";

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
            <img src="./images/ira_logo.png" className=" h-14" />
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
