import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TelegramIcon, TwitterIcon } from "../../assets/Icons";

const Footer = () => {
  return (
    <div className="footer-comp flex flex-col bottom-0 left-0 right-0 w-full min-h-[60px]">
      <div className="top-sec flex py-8 border-t border-gray-600">
        <div className="wrap wrapWidth flex flex-col gap-2">
          <h1 className="text-white text-3xl font-medium text-center">
            Token Address
          </h1>
          <p className="text-white font-light text-sm text-center">
            IRA: 0x029C58A909fBe3d4BE85a24f414DDa923A3Fde0F
          </p>
          <div className="social flex items-center justify-center gap-3">
            
            <Link to="https://x.com/Defi_IRAcom">
            <div className="icon flex items-center justify-center cursor-pointer">
              <TwitterIcon />
            </div>
            </Link>
            <Link to="https://t.me/+qLF-a59mNJ0yOGM5">
            <div className="icon flex items-center justify-center cursor-pointer">
              <TelegramIcon />
            </div>
            </Link>
            {/* <div className="icon flex items-center justify-center cursor-pointer">
              <TelegramIcon />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="copy-right">
        Copyright © 2024. All rights reserved by DeFI-IRA.
      </div> */}
    </div>
  );
};

export default Footer;
