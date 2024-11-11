let StrategyABI = [
    {
      type: "constructor",
      inputs: [
        {
          name: "_asset",
          type: "address",
          internalType: "address",
        },
        {
          name: "strategyName",
          type: "string",
          internalType: "string",
        },
        {
          name: "symbol",
          type: "string",
          internalType: "string",
        },
        {
          name: "_positionManager",
          type: "address",
          internalType: "address",
        },
        {
          name: "_swapRouter",
          type: "address",
          internalType: "address",
        },
        {
          name: "_modelVerifier",
          type: "address",
          internalType: "address",
        },
        {
          name: "scalers",
          type: "uint256[3]",
          internalType: "uint256[3]",
        },
        {
          name: "minAdditions",
          type: "uint256[3]",
          internalType: "uint256[3]",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "DOMAIN_SEPARATOR",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "bytes32",
          internalType: "bytes32",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "allowance",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "approve",
      inputs: [
        {
          name: "spender",
          type: "address",
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "asset",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract ERC20",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "balanceOf",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "convertToAssets",
      inputs: [
        {
          name: "shares",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "convertToShares",
      inputs: [
        {
          name: "assets",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "decimals",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "deposit",
      inputs: [
        {
          name: "assets",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "receiver",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "feeScalers",
      inputs: [],
      outputs: [
        {
          name: "scaler",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "minAddition",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "highScalers",
      inputs: [],
      outputs: [
        {
          name: "scaler",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "minAddition",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "lowScalers",
      inputs: [],
      outputs: [
        {
          name: "scaler",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "minAddition",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "maxDeposit",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "maxMint",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "maxRedeem",
      inputs: [
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "maxWithdraw",
      inputs: [
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "mint",
      inputs: [
        {
          name: "shares",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "receiver",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "assets",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "name",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "string",
          internalType: "string",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "nonces",
      inputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "permit",
      inputs: [
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
        {
          name: "spender",
          type: "address",
          internalType: "address",
        },
        {
          name: "value",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "deadline",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "v",
          type: "uint8",
          internalType: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
          internalType: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
          internalType: "bytes32",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "poolFee",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint24",
          internalType: "uint24",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "positionManager",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract INonfungiblePositionManager",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "previewDeposit",
      inputs: [
        {
          name: "assets",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "previewMint",
      inputs: [
        {
          name: "shares",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "previewRedeem",
      inputs: [
        {
          name: "shares",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "previewWithdraw",
      inputs: [
        {
          name: "assets",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "prover",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "redeem",
      inputs: [
        {
          name: "shares",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "receiver",
          type: "address",
          internalType: "address",
        },
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "assets",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "s_activeLiquidity",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint128",
          internalType: "uint128",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "s_activePool",
      inputs: [],
      outputs: [
        {
          name: "token0",
          type: "address",
          internalType: "address",
        },
        {
          name: "token1",
          type: "address",
          internalType: "address",
        },
        {
          name: "fee",
          type: "uint24",
          internalType: "uint24",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "s_activeTickRange",
      inputs: [],
      outputs: [
        {
          name: "lower",
          type: "int24",
          internalType: "int24",
        },
        {
          name: "upper",
          type: "int24",
          internalType: "int24",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "swapExactInputSingle",
      inputs: [
        {
          name: "amountIn",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "amountOutMin",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "tokenIn",
          type: "address",
          internalType: "address",
        },
        {
          name: "tokenOut",
          type: "address",
          internalType: "address",
        },
        {
          name: "to",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "amountOut",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "swapRouter",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract ISwapRouter",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "string",
          internalType: "string",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "totalAssets",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "totalSupply",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "transfer",
      inputs: [
        {
          name: "to",
          type: "address",
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferFrom",
      inputs: [
        {
          name: "from",
          type: "address",
          internalType: "address",
        },
        {
          name: "to",
          type: "address",
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updateLiquidity",
      inputs: [
        {
          name: "tokenId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "newPool",
          type: "tuple",
          internalType: "struct LiquidityManager.PoolInfo",
          components: [
            {
              name: "token0",
              type: "address",
              internalType: "address",
            },
            {
              name: "token1",
              type: "address",
              internalType: "address",
            },
            {
              name: "fee",
              type: "uint24",
              internalType: "uint24",
            },
          ],
        },
        {
          name: "proof",
          type: "bytes",
          internalType: "bytes",
        },
        {
          name: "instances",
          type: "uint256[]",
          internalType: "uint256[]",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "verifier",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "contract IHalo2Verifier",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "withdraw",
      inputs: [
        {
          name: "assets",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "receiver",
          type: "address",
          internalType: "address",
        },
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "shares",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "spender",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Deposit",
      inputs: [
        {
          name: "caller",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "assets",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "shares",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "NewPositionOpened",
      inputs: [
        {
          name: "tokenId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "liquidity",
          type: "uint128",
          indexed: false,
          internalType: "uint128",
        },
        {
          name: "amount0",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "amount1",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "predictedFees",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          name: "from",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "to",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "amount",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Withdraw",
      inputs: [
        {
          name: "caller",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "receiver",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "assets",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "shares",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "InvalidPositionSizeError",
      inputs: [],
    },
    {
      type: "error",
      name: "InvalidProofError",
      inputs: [],
    },
    {
      type: "error",
      name: "NotProverError",
      inputs: [],
    },
    {
      type: "error",
      name: "ReentrancyGuardReentrantCall",
      inputs: [],
    },
  ];
  
  const strategyBytecode = `0x6101206040523480156200001257600080fd5b506040516200387b3803806200387b83398101604081905262000035916200038e565b83858989898181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a191906200046c565b6000620000af848262000529565b506001620000be838262000529565b5060ff81166080524660a052620000d46200018b565b60c052505050506001600160a01b0391821660e05250600680549282166001600160a01b0319938416179055918216610100526001600b55600c805495909216941693909317909255604080518082018252825180825284516020928301819052600d91909155600e55815180830183528184015180825282860151918301829052600f55601055815180830183529282015180845291909301519190920181905260119190915560125550620006739350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001bf9190620005f5565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80516001600160a01b03811681146200023f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000285576200028562000244565b604052919050565b600082601f8301126200029f57600080fd5b81516001600160401b03811115620002bb57620002bb62000244565b6020620002d1601f8301601f191682016200025a565b8281528582848701011115620002e657600080fd5b60005b8381101562000306578581018301518282018401528201620002e9565b506000928101909101919091529392505050565b600082601f8301126200032c57600080fd5b604051606081016001600160401b038111828210171562000351576200035162000244565b6040528060608401858111156200036757600080fd5b845b818110156200038357805183526020928301920162000369565b509195945050505050565b600080600080600080600080610180898b031215620003ac57600080fd5b620003b78962000227565b60208a01519098506001600160401b0380821115620003d557600080fd5b620003e38c838d016200028d565b985060408b0151915080821115620003fa57600080fd5b50620004098b828c016200028d565b9650506200041a60608a0162000227565b94506200042a60808a0162000227565b93506200043a60a08a0162000227565b92506200044b8a60c08b016200031a565b91506200045d8a6101208b016200031a565b90509295985092959890939650565b6000602082840312156200047f57600080fd5b815160ff811681146200049157600080fd5b9392505050565b600181811c90821680620004ad57607f821691505b602082108103620004ce57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000524576000816000526020600020601f850160051c81016020861015620004ff5750805b601f850160051c820191505b8181101562000520578281556001016200050b565b5050505b505050565b81516001600160401b0381111562000545576200054562000244565b6200055d8162000556845462000498565b84620004d4565b602080601f8311600181146200059557600084156200057c5750858301515b600019600386901b1c1916600185901b17855562000520565b600085815260208120601f198616915b82811015620005c657888601518255948401946001909101908401620005a5565b5085821015620005e55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620006058162000498565b60018281168015620006205760018114620006365762000667565b60ff198416875282151583028701945062000667565b8760005260208060002060005b858110156200065e5781548a82015290840190820162000643565b50505082870194505b50929695505050505050565b60805160a05160c05160e0516101005161314c6200072f600039600081816105a001528181610a850152610b9d0152600081816104050152818161069d015281816109e201528181610c3101528181610e1d01528181610f64015281816112cd01528181611879015281816118a8015281816118d10152818161191101528181611966015281816119ed01528181611a2c01528181611a570152611a960152600061097b0152600061094b015260006103b1015261314c6000f3fe608060405234801561001057600080fd5b50600436106102535760003560e01c806370a0823111610146578063ba087652116100c3578063d505accf11610087578063d505accf146105e8578063d67064f4146105fd578063d905777e14610610578063dd62ed3e14610639578063ef8b30f714610664578063ffc253be1461067757600080fd5b8063ba08765214610588578063c31c9c071461059b578063c63d75b614610435578063c6e6f592146105c2578063ce96cb77146105d557600080fd5b80639cf7cdb51161010a5780639cf7cdb5146104f1578063a9059cbb14610524578063ad21638214610537578063b3d7f6b914610562578063b460af941461057557600080fd5b806370a0823114610483578063791b98bc146104a35780637ecebe00146104b657806394bf804d146104d657806395d89b41146104e957600080fd5b80632b7ac3f3116101d45780633a0889fa116101985780633a0889fa14610427578063402d267d146104355780634cdad5061461044a5780636e553f651461045d578063708623d21461047057600080fd5b80632b7ac3f314610381578063313ce567146103ac57806332a8f30f146103e55780633644e515146103f857806338d52e0f1461040057600080fd5b80630a28a4771161021b5780630a28a477146102db57806313f0cdc1146102ee57806318160ddd1461031157806323b872dd1461031a5780632590cd701461032d57600080fd5b806301e1d1141461025857806306fdde031461027357806307a2d13a14610288578063089fe6aa1461029b578063095ea7b3146102b8575b600080fd5b610260610685565b6040519081526020015b60405180910390f35b61027b61071f565b60405161026a91906128ad565b6102606102963660046128fc565b6107ad565b6102a4610bb881565b60405162ffffff909116815260200161026a565b6102cb6102c6366004612931565b6107da565b604051901515815260200161026a565b6102606102e93660046128fc565b610847565b600d54600e546102fc919082565b6040805192835260208301919091520161026a565b61026060025481565b6102cb61032836600461295b565b610867565b600754600854610356916001600160a01b039081169190811690600160a01b900462ffffff1683565b604080516001600160a01b03948516815293909216602084015262ffffff169082015260600161026a565b600c54610394906001600160a01b031681565b6040516001600160a01b03909116815260200161026a565b6103d37f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161026a565b601354610394906001600160a01b031681565b610260610947565b6103947f000000000000000000000000000000000000000000000000000000000000000081565b600f546010546102fc919082565b610260610443366004612997565b5060001990565b6102606104583660046128fc565b61099d565b61026061046b3660046129b2565b6109a8565b61026061047e3660046129de565b610a6e565b610260610491366004612997565b60036020526000908152604090205481565b600654610394906001600160a01b031681565b6102606104c4366004612997565b60056020526000908152604090205481565b6102606104e43660046129b2565b610c17565b61027b610cae565b60095461050a90600281810b9163010000009004900b82565b60408051600293840b81529190920b60208201520161026a565b6102cb610532366004612931565b610cbb565b600a5461054a906001600160801b031681565b6040516001600160801b03909116815260200161026a565b6102606105703660046128fc565b610d21565b610260610583366004612a35565b610d40565b610260610596366004612a35565b610e44565b6103947f000000000000000000000000000000000000000000000000000000000000000081565b6102606105d03660046128fc565b610f8b565b6102606105e3366004612997565b610fab565b6105fb6105f6366004612a71565b610fcd565b005b6105fb61060b366004612b72565b611211565b61026061061e366004612997565b6001600160a01b031660009081526003602052604090205490565b610260610647366004612c75565b600460209081526000928352604080842090915290825290205481565b6102606106723660046128fc565b611517565b6011546012546102fc919082565b6000806040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156106ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107109190612c9f565b61071a9190612cce565b905090565b6000805461072c90612ce1565b80601f016020809104026020016040519081016040528092919081815260200182805461075890612ce1565b80156107a55780601f1061077a576101008083540402835291602001916107a5565b820191906000526020600020905b81548152906001019060200180831161078857829003601f168201915b505050505081565b60025460009080156107d1576107cc6107c4610685565b849083611522565b6107d3565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108359086815260200190565b60405180910390a35060015b92915050565b60025460009080156107d1576107cc8161085f610685565b859190611540565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146108c35761089e8382612d1b565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906108eb908490612d1b565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206130f7833981519152906109349087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146109785761071a611566565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000610841826107ad565b60006109b2611600565b60006109bd84611517565b6040516323b872dd60e01b8152336004820152306024820152604481018690529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610a33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a579190612d2e565b50610a62838261162a565b90506108416001600b55565b60405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018790526000919085169063095ea7b3906044016020604051808303816000875af1158015610ae1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b059190612d2e565b506040805160e0810182526001600160a01b03868116825285811660208301908152610bb883850190815286831660608501908152608085018c815260a086018c8152600060c0880190815297516304e45aaf60e01b8152875187166004820152945186166024860152925162ffffff1660448501529051841660648401525160848301525160a48201529251811660c484015290917f0000000000000000000000000000000000000000000000000000000000000000909116906304e45aaf9060e4016020604051808303816000875af1158015610be8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0c9190612c9f565b979650505050505050565b6000610c2283610d21565b9050610c596001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611687565b610c63828461162a565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d7910160405180910390a3610841565b6001805461072c90612ce1565b33600090815260036020526040812080548391908390610cdc908490612d1b565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206130f7833981519152906108359086815260200190565b60025460009080156107d1576107cc610d38610685565b849083611540565b6000610d4b84610847565b9050336001600160a01b03831614610dbb576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114610db957610d948282612d1b565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b610dc58282611723565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46107d36001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611785565b6000336001600160a01b03831614610eb4576001600160a01b03821660009081526004602090815260408083203384529091529020546000198114610eb257610e8d8582612d1b565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b610ebd8461099d565b905080600003610f025760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b60448201526064015b60405180910390fd5b610f0c8285611723565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46107d36001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611785565b60025460009080156107d1576107cc81610fa3610685565b859190611522565b6001600160a01b038116600090815260036020526040812054610841906107ad565b4284101561101d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610ef9565b60006001611029610947565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015611135573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061116b5750876001600160a01b0316816001600160a01b0316145b6111a85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610ef9565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b600c54604051631e8e1e1360e01b81526000916001600160a01b031690631e8e1e1390611248908890889088908890600401612d50565b6020604051808303816000875af1158015611267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128b9190612d2e565b9050806112ab57604051637d31e14960e01b815260040160405180910390fd5b6112b48761180c565b6040516370a0823160e01b81523060048201526103e8907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561131c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113409190612c9f565b101561135f57604051631e0fa1a160e21b815260040160405180910390fd5b60008061136b8861193e565b895160208b015160408c01519395509193509160006113a18989838161139357611393612db4565b90506020020135600d611ac7565b905060006113c98a8a60028181106113bb576113bb612db4565b90506020020135600f611ac7565b905060006113f18b8b60018181106113e3576113e3612db4565b905060200201356011611ac7565b905060006113fe83611b08565b9050600061140b83611b08565b905060006040518061016001604052808a6001600160a01b03168152602001896001600160a01b031681526020018862ffffff1681526020018360020b81526020018460020b81526020018c81526020018b81526020016000815260200160008152602001306001600160a01b0316815260200142600a61148c9190612cce565b90529050600080808061149e85611ba7565b604080518581526001600160801b038516602082015290810183905260608101829052608081018f9052939750919550935091507fc28b6edbb41ce82a93428b2a542fab76fb6dea948efd9800bc6a71bd0e2f995d9060a00160405180910390a150505050505050505050505050505050505050505050565b600061084182610f8b565b600082600019048411830215820261153957600080fd5b5091020490565b600082600019048411830215820261155757600080fd5b50910281810615159190040190565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516115989190612dca565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6002600b540361162357604051633ee5aeb560e01b815260040160405180910390fd5b6002600b55565b806002600082825461163c9190612cce565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206130f783398151915291015b60405180910390a35050565b50565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061171c5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610ef9565b5050505050565b6001600160a01b0382166000908152600360205260408120805483929061174b908490612d1b565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206130f783398151915290602001611678565b600060405163a9059cbb60e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806118065760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610ef9565b50505050565b600a546001600160801b03161580159061182557508015155b156116845760008061185c83600a60009054906101000a90046001600160801b031660008042600a6118579190612cce565b611ca7565b6007546008549294509092506001600160a01b03908116918116907f00000000000000000000000000000000000000000000000000000000000000001682146118cf576118cd846000847f000000000000000000000000000000000000000000000000000000000000000030610a6e565b505b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b03161461171c57611936836000837f000000000000000000000000000000000000000000000000000000000000000030610a6e565b505050505050565b805160208201516040516370a0823160e01b81523060048201526000928392909183906002907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156119b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d99190612c9f565b6119e39190612e81565b90508094508093507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b031614611a5557611a528160007f00000000000000000000000000000000000000000000000000000000000000008630610a6e565b94505b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614611abf57611abc8160007f00000000000000000000000000000000000000000000000000000000000000008530610a6e565b93505b505050915091565b60006509184e72a0008260010154611adf9190612e81565b82546648c2739500000090611af49086612e95565b611afe9190612e81565b6107d39190612cce565b600080611b1483611e31565b90506000620186a0611b268382612e95565b611b3490600160601b612e95565b611b3e9190612e81565b90506000611b4b82611f19565b90506000611b5a603c83612eac565b905060008160020b1315611b7c57611b728183612ece565b9695505050505050565b60008160020b1215611b9e57603c611b948284612ece565b611b729190612ece565b50949350505050565b600080600080611bb685612253565b60408051606080820183528b516001600160a01b039081168084526020808f01519092168285018190528e86015162ffffff908116958701869052600780546001600160a01b031916909317909255600880546001600160b81b031916909117600160a01b909502949094179093558351808501909452908c0151600281810b85526080909d01519c8d900b93909101929092526009805492821665ffffffffffff199093169290921763010000009b9091169a909a0299909917909855600a80546fffffffffffffffffffffffffffffffff19166001600160801b03841617905591979096919550909350915050565b6040805160a0810182528681526001600160801b038681166020830190815282840187815260608401878152608085018781526006549651630624e65f60e11b8152865160048201529351909416602484015290516044830152516064820152905160848201526000928392916001600160a01b0390911690630c49ccbe9060a40160408051808303816000875af1158015611d47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6b9190612ef3565b604080516080810182528b815233602082019081526001600160801b0382840181815260608401828152600654955163fc6f786560e01b81528551600482015293516001600160a01b03908116602486015291518316604485015251909116606483015294975092955092169063fc6f78659060840160408051808303816000875af1158015611dff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e239190612ef3565b505050509550959350505050565b600081600003611e4357506000919050565b60006001611e50846123e1565b901c6001901b90506001818481611e6957611e69612e6b565b048201901c90506001818481611e8157611e81612e6b565b048201901c90506001818481611e9957611e99612e6b565b048201901c90506001818481611eb157611eb1612e6b565b048201901c90506001818481611ec957611ec9612e6b565b048201901c90506001818481611ee157611ee1612e6b565b048201901c90506001818481611ef957611ef9612e6b565b048201901c90506107d381828581611f1357611f13612e6b565b04612475565b60006401000276a36001600160a01b03831610801590611f55575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b038316105b611f855760405162461bcd60e51b81526020600482015260016024820152602960f91b6044820152606401610ef9565b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c9790881196179094179092171790911717176080811061202057612016607f82612d1b565b83901c9150612031565b61202b81607f612d1b565b83901b91505b60006040612040608084612f17565b901b9050828302607f1c92508260801c80603f1b8217915083811c935050828302607f1c92508260801c80603e1b8217915083811c935050828302607f1c92508260801c80603d1b8217915083811c935050828302607f1c92508260801c80603c1b8217915083811c935050828302607f1c92508260801c80603b1b8217915083811c935050828302607f1c92508260801c80603a1b8217915083811c935050828302607f1c92508260801c8060391b8217915083811c935050828302607f1c92508260801c8060381b8217915083811c935050828302607f1c92508260801c8060371b8217915083811c935050828302607f1c92508260801c8060361b8217915083811c935050828302607f1c92508260801c8060351b8217915083811c935050828302607f1c92508260801c8060341b8217915083811c935050828302607f1c92508260801c8060331b8217915083811c935050828302607f1c92508260801c8060321b8217915050600081693627a301d71055774c856121c39190612f3e565b9050600060806121e36f028f6481ab7f045a5af012a19d003aaa84612f17565b901d905060006080612205846fdb2df09e81959a81455e260799a0632f612f6e565b901d90508060020b8260020b1461224457886001600160a01b03166122298261248b565b6001600160a01b0316111561223e5781612246565b80612246565b815b9998505050505050505050565b805160065460a083015160405163095ea7b360e01b81526001600160a01b0392831660048201526024810191909152600092839283928392919091169063095ea7b3906044016020604051808303816000875af11580156122b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122dc9190612d2e565b50602085015160065460c087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915291169063095ea7b3906044016020604051808303816000875af115801561233a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061235e9190612d2e565b50600654604051634418b22b60e11b81526001600160a01b039091169063883164569061238f908890600401612f96565b6080604051808303816000875af11580156123ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123d2919061305a565b92989197509550909350915050565b600080608083901c156123f657608092831c92015b604083901c1561240857604092831c92015b602083901c1561241a57602092831c92015b601083901c1561242c57601092831c92015b600883901c1561243e57600892831c92015b600483901c1561245057600492831c92015b600283901c1561246257600292831c92015b600183901c156108415760010192915050565b600081831061248457816107d3565b5090919050565b60008060008360020b126124a2578260020b6124af565b8260020b6124af906130a4565b90506124be620d89e7196130c0565b62ffffff168111156124f65760405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606401610ef9565b60008160011660000361250d57600160801b61251f565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561255e576080612559826ffff97272373d413259a46990580e213a612e95565b901c90505b6004821615612588576080612583826ffff2e50f5f656932ef12357cf3c7fdcc612e95565b901c90505b60088216156125b25760806125ad826fffe5caca7e10e4e61c3624eaa0941cd0612e95565b901c90505b60108216156125dc5760806125d7826fffcb9843d60f6159c9db58835c926644612e95565b901c90505b6020821615612606576080612601826fff973b41fa98c081472e6896dfb254c0612e95565b901c90505b604082161561263057608061262b826fff2ea16466c96a3843ec78b326b52861612e95565b901c90505b608082161561265a576080612655826ffe5dee046a99a2a811c461f1969c3053612e95565b901c90505b610100821615612685576080612680826ffcbe86c7900a88aedcffc83b479aa3a4612e95565b901c90505b6102008216156126b05760806126ab826ff987a7253ac413176f2b074cf7815e54612e95565b901c90505b6104008216156126db5760806126d6826ff3392b0822b70005940c7a398e4b70f3612e95565b901c90505b610800821615612706576080612701826fe7159475a2c29b7443b29c7fa6e889d9612e95565b901c90505b61100082161561273157608061272c826fd097f3bdfd2022b8845ad8f792aa5825612e95565b901c90505b61200082161561275c576080612757826fa9f746462d870fdf8a65dc1f90e061e5612e95565b901c90505b614000821615612787576080612782826f70d869a156d2a1b890bb3df62baf32f7612e95565b901c90505b6180008216156127b25760806127ad826f31be135f97d08fd981231505542fcfa6612e95565b901c90505b620100008216156127de5760806127d9826f09aa508b5b7a84e1c677de54f3e99bc9612e95565b901c90505b62020000821615612809576080612804826e5d6af8dedb81196699c329225ee604612e95565b901c90505b6204000082161561283357608061282e826d2216e584f5fa1ea926041bedfe98612e95565b901c90505b6208000082161561285b576080612856826b048a170391f7dc42444e8fa2612e95565b901c90505b60008460020b13156128765761287381600019612e81565b90505b612885640100000000826130e2565b15612891576001612894565b60005b6128a59060ff16602083901c612cce565b949350505050565b60006020808352835180602085015260005b818110156128db578581018301518582016040015282016128bf565b506000604082860101526040601f19601f8301168501019250505092915050565b60006020828403121561290e57600080fd5b5035919050565b80356001600160a01b038116811461292c57600080fd5b919050565b6000806040838503121561294457600080fd5b61294d83612915565b946020939093013593505050565b60008060006060848603121561297057600080fd5b61297984612915565b925061298760208501612915565b9150604084013590509250925092565b6000602082840312156129a957600080fd5b6107d382612915565b600080604083850312156129c557600080fd5b823591506129d560208401612915565b90509250929050565b600080600080600060a086880312156129f657600080fd5b8535945060208601359350612a0d60408701612915565b9250612a1b60608701612915565b9150612a2960808701612915565b90509295509295909350565b600080600060608486031215612a4a57600080fd5b83359250612a5a60208501612915565b9150612a6860408501612915565b90509250925092565b600080600080600080600060e0888a031215612a8c57600080fd5b612a9588612915565b9650612aa360208901612915565b95506040880135945060608801359350608088013560ff81168114612ac757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008083601f840112612af657600080fd5b50813567ffffffffffffffff811115612b0e57600080fd5b602083019150836020828501011115612b2657600080fd5b9250929050565b60008083601f840112612b3f57600080fd5b50813567ffffffffffffffff811115612b5757600080fd5b6020830191508360208260051b8501011115612b2657600080fd5b60008060008060008086880360c0811215612b8c57600080fd5b873596506060601f1982011215612ba257600080fd5b506040516060810167ffffffffffffffff8282108183111715612bd557634e487b7160e01b600052604160045260246000fd5b81604052612be560208b01612915565b8352612bf360408b01612915565b602084015260608a0135915062ffffff82168214612c1057600080fd5b81604084015282975060808a0135925080831115612c2d57600080fd5b612c398b848c01612ae4565b909750955060a08a0135925086915080831115612c5557600080fd5b5050612c6389828a01612b2d565b979a9699509497509295939492505050565b60008060408385031215612c8857600080fd5b612c9183612915565b91506129d560208401612915565b600060208284031215612cb157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561084157610841612cb8565b600181811c90821680612cf557607f821691505b602082108103612d1557634e487b7160e01b600052602260045260246000fd5b50919050565b8181038181111561084157610841612cb8565b600060208284031215612d4057600080fd5b815180151581146107d357600080fd5b6040815283604082015283856060830137600060608583018101829052601f19601f8701168301838103820160208501529081018490526001600160fb1b03841115612d9b57600080fd5b8360051b80866080840137016080019695505050505050565b634e487b7160e01b600052603260045260246000fd5b60008083548160018260011c91506001831680612de857607f831692505b60208084108203612e0757634e487b7160e01b86526022600452602486fd5b818015612e1b5760018114612e3057612e5d565b60ff1986168952841515850289019650612e5d565b60008a81526020902060005b86811015612e555781548b820152908501908301612e3c565b505084890196505b509498975050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082612e9057612e90612e6b565b500490565b808202811582820484141761084157610841612cb8565b60008260020b80612ebf57612ebf612e6b565b808360020b0791505092915050565b600282810b9082900b03627fffff198112627fffff8213171561084157610841612cb8565b60008060408385031215612f0657600080fd5b505080516020909101519092909150565b8181036000831280158383131683831282161715612f3757612f37612cb8565b5092915050565b80820260008212600160ff1b84141615612f5a57612f5a612cb8565b818105831482151761084157610841612cb8565b8082018281126000831280158216821582161715612f8e57612f8e612cb8565b505092915050565b81516001600160a01b0316815261016081016020830151612fc260208401826001600160a01b03169052565b506040830151612fd9604084018262ffffff169052565b506060830151612fee606084018260020b9052565b506080830151613003608084018260020b9052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151613049828501826001600160a01b03169052565b505061014092830151919092015290565b6000806000806080858703121561307057600080fd5b8451935060208501516001600160801b038116811461308e57600080fd5b6040860151606090960151949790965092505050565b6000600160ff1b82016130b9576130b9612cb8565b5060000390565b60008160020b627fffff1981036130d9576130d9612cb8565b60000392915050565b6000826130f1576130f1612e6b565b50069056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa264697066735822122055ca1df49bb927bcf1766110b7c6cac77b1ffcb2222e7e98c320ff42aa7d76e264736f6c63430008170033`;
  
  export { StrategyABI, strategyBytecode };