import exp from "constants";
import { BigNumberish } from "ethers";
import path from "path";

const { ethers } = require("ethers");
// const { VerifierABI, verifierBytecode } = require("./VerifierAbi");
const { VerifierABI, verifierBytecode } = require("./verifierAbi.ts");
const { StrategyABI, strategyBytecode } = require("./liquidityStrategyAbi.ts");


export const deployVerifier = async (signer: any) => {
    const factory = new ethers.ContractFactory(
        VerifierABI,
        verifierBytecode,
        signer
    );

    const contract = await factory.deploy({
        gasLimit: ethers.utils.hexlify(30000000) // Set gas limit to 5,000,000
    });
    await contract.deployed();
    return contract.address;
};

export const deployStrategy = async (signer: any, verifierAddress: string) => {
    // const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    // const privateKey = process.env.PRIVATE_KEY;
    // const wallet = new ethers.Wallet(privateKey, provider);
  
    console.log("Verifier Address", verifierAddress);
    
    // Create a ContractFactory
    const factory = new ethers.ContractFactory(
      StrategyABI,
      strategyBytecode,
      signer
    );
  
    const WETH_ADDR = "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14";
    const USDC = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
  
    const strategyName = "AIStrategy";
    const symbol = "AIS";
    const positionManager = "0x1238536071E1c677A632429e3655c799b22cDA52";
    const swapRouter = "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E";
  
    const scalers = [
      "7455504813211",
      "2953758299944270168064",
      "1838876263346026577920",
    ];
    const minAdditions = ["1729926753534472704", "262951735771738", "0"];
  
    // Deploy the contract
    const contract = await factory.deploy(
      WETH_ADDR,
      strategyName,
      symbol,
      positionManager,
      swapRouter,
      verifierAddress, // "0xF26585263D5C18750870314e7Cf16fE2ED3c0A90",
      scalers,
      minAdditions,
      {
        gasLimit: ethers.utils.hexlify(10000000),
      }
    );

    await contract.deployed();

    console.log("Strategy Contract address", contract.address);
  
    // Wait for the contract to be mined
    let txRes = await contract.deployTransaction.wait();
  
    console.log("Strategy deployed to:", txRes.contractAddress);
  
    return txRes.contractAddress;
  };
  