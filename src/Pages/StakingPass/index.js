import React, {useEffect, useState } from "react";
import Wrapper from "../../routes/Wrapper";
import videos from '../../assets/images/backgroundVideo.mp4'




import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  token_abi, 
  ira_address,
  mint_address,
  minting_abi,       
} from "../../configs/Contracts";

import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { base, baseSepolia } from "wagmi/chains";



const StakingPass = () => {
  const [numb, setNumb] = useState(0);
  const chainId = process.env.REACT_APP_ENV == "production" ? base.id : baseSepolia.id;

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const { address, isConnecting ,isDisconnected} = useAccount()

  const [count, set_count] = useState(0);

  const notify = () => toast("Transaction Successfull!");


  const { isLoading: isConfirming, isSuccess: isConfirmed} =
  useWaitForTransactionReceipt({
    hash,
  })



  const [supply, set_supply] = useState(0);
  const [cost, set_cost] = useState(0);
  const [maxSupply, set_maxSupply] = useState(0);
  const [balance, set_balance] = useState(0);
  const [curr_price, set_curr_price] = useState(0);
  const [paused, set_paused] = useState(false);
  const [ira_balance, set_ira_balance] = useState(0);
  const [maxMintAmount, set_maxMintAmount] = useState(0);
  const [nft_price, set_nft_price] = useState(0);


  


  async function Mint1() {
  try {
    const tx = await writeContractAsync({
      abi: minting_abi,
      address: mint_address,
      functionName: "mint", 
      args: [address,numb],

    });

    set_count(1)

} catch (err) {
    console.error(err);
}
}



useEffect(()=>{
if(isConfirmed)
{
if(count==0)
{
  // alert("ninkn")
  Mint1()

}
if(count==1)
{
  set_count(0)
  notify()
  setNumb(0)
  test();
}
}


},[isConfirmed])


useEffect(()=>{
 
  test();
  
  },[address])




async function IRA_approval () {
try {
    const tx = await writeContractAsync({
      abi: token_abi,
      address: ira_address,
      args: [mint_address,Convert_To_Wei(Convert_To_eth( nft_price ) * Number(numb)) ],
      functionName: "approve",

    }); 
    // stake1();

   } catch (err) {
    console.error(err);
}
}







function Convert_To_eth(val) {
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://base.drpc.org	")
);

val = web3.utils.fromWei(val.toString(), "ether");
return val;
}

function Convert_To_Wei(val) {
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://base.drpc.org	")
);

val = web3.utils.toWei(val.toString(), "ether");
return val;
}



async function Mint()
{

if(isDisconnected)
{
  alert("kindly connect your wallet ");
  return;
}

if(numb==0 )
{
  alert("kindly write amount to stake ");
  return;
}

if(Number(ira_balance)/10**18 < (Number(numb)*(Number(nft_price)/10**18)))
{
  alert("You don't have sufficient IRA Token");
  return;
}
if (chainId != currentChainId )
{
  await switchChainAsync({ chainId });
  await IRA_approval?.();
} 
else 
{
  await IRA_approval?.();
}

}


async function test() 
    {
  
      const web3= new Web3(new Web3.providers.HttpProvider("https://base.drpc.org	"));
      let balance;
      const contract = new web3.eth.Contract(minting_abi, mint_address);
      const Token_contract = new web3.eth.Contract(token_abi, ira_address);

      let supply = await contract.methods.totalSupply().call();
      let paused = await contract.methods.paused().call();  
      let maxSupply = await contract.methods.maxSupply().call();
      let maxMintAmount = await contract.methods.maxMintAmount().call();
      let nft_price = await contract.methods.nft_price().call();

      let ira_balance;
      if(!isDisconnected)
      {
         ira_balance = await Token_contract.methods.balanceOf(address).call();

      }
      set_maxMintAmount(maxMintAmount)
      set_nft_price(nft_price)
      set_ira_balance(ira_balance)
      set_paused(paused);
      set_balance(balance)
      set_supply(supply)
      set_maxSupply(maxSupply);

    }


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
            DeFi-IRA NFT
            </h1>
            <p className="price-lbl text-white font-light">Price per mint</p>
            <h2 className="title2 text-white font-medium text-xl mb-4">
              {Number(nft_price)/10**18} IRA Each
            </h2>
            <div className="flex flex-col gap-2">
              <div className="border border-[#ffffff] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Available To Mint
                </label>
                <label className="inter text-white font-normal text-sm">
                  {Number(supply)} minted out of {Number(maxSupply)}
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
                      onClick={(e) => setNumb(numb - 1 >=0 ? numb - 1: 0)}
                    >
                      -
                    </button>
                    <h2 className="numb text-white font-normal text-base inter">
                      {numb}
                    </h2>
                    <button
                      className="flex items-center justify-center h-4 w-4 text-lg rounded-full bg-white text-black"
                      onClick={(e) => setNumb(numb + 1 <= Number(maxMintAmount) ? numb + 1: Number(maxMintAmount))}
                    >
                      +
                    </button>
                  </div>
                  <label className="inter text-white font-normal text-sm">
                    {Number(maxMintAmount)} max
                  </label>
                </div>
              </div>
              <div className="border border-[#ffffff] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Total Amount
                </label>
                <label className="inter text-white font-normal text-sm">
                  {(Number(nft_price) * Number(numb))/10**18} IRA
                </label>
              </div>
              <button
                style={{ backgroundColor: "#ffffff" }}
                className="btn text-black"
                onClick={Mint}
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
