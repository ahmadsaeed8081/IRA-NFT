import React, { useState } from "react";
import Wrapper from "../../routes/Wrapper";
import videos from '../../assets/images/backgroundVideo.mp4'
const StakingPass = () => {
  const [numb, setNumb] = useState(1);

  return (
    <Wrapper>
      {/* Background Video */}
      <div className="staking-pass-page flex items-center justify-center relative" >
        <video
          autoPlay
          loop
          muted
          
          className="absolute top-0 left-0 w-full h-full object-cover " style={{    backgroundColor: "rgba(0, 0, 0, 1)"
        }}
        >
          <source src={videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="wrap wrapWidth flex items-center justify-center gap-14 relative z-10">
          <div className="left flex items-center justify-center flex-1" >
            <img
              style={{ transform: "rotate(-15deg)" }}
              src="./images/nft.gif"
              alt="NFT"
            />
          </div>
          <div className="right flex flex-col flex-1">
            <h1 style={{ color: "#ffffff", fontSize: "32px" }} className="mb-4">
              IRA NFTs
            </h1>
            <p className="price-lbl text-white font-light">Price per mint</p>
            <h2 className="title2 text-white font-medium text-xl mb-4">
              100,000 IRA Each
            </h2>
            <div className="flex flex-col gap-2">
              <div className="border border-[#ffffff] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Available To Mint
                </label>
                <label className="inter text-white font-normal text-sm">
                  0 minted out of 2210
                </label>
              </div>
              <div className="border border-[#ffffff] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Mint Amount
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="flex items-center justify-center h-4 w-4 text-lg rounded-full bg-white text-black"
                      onClick={(e) => setNumb(numb - 1)}
                    >
                      -
                    </button>
                    <h2 className="numb text-white font-normal text-base inter">
                      {numb}
                    </h2>
                    <button
                      className="flex items-center justify-center h-4 w-4 text-lg rounded-full bg-white text-black"
                      onClick={(e) => setNumb(numb + 1)}
                    >
                      +
                    </button>
                  </div>
                  <label className="inter text-white font-normal text-sm">
                    20 max
                  </label>
                </div>
              </div>
              <div className="border border-[#ffffff] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Total Amount
                </label>
                <label className="inter text-white font-normal text-sm">
                  0.00 ETH
                </label>
              </div>
              <button
                style={{ backgroundColor: "#ffffff" }}
                className="btn text-black"
              >
                Mint NFT Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StakingPass;
