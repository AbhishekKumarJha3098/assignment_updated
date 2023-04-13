require("dotenv").config()
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3("https://polygon-mumbai.g.alchemy.com/v2/lVh144DjFt4Njw02fx4E9sDhDOrDpB3o")

const contract = require("../artifacts/contracts/Operations.sol/Operations.json")
const contractAddress = "0x0e70b2870347b973496cf39bccfc12395bb524b8"
const nftContract = new web3.eth.Contract(contract.abi,contractAddress  )

// async function fibonacci(string) {
//   const nonce = await web3.eth.getTransactionCount("0x3cCd02486AdA2ffF66D1Ae6b503e18F7D4B186Fb", "latest") //get latest nonce

//   //the transaction
//   const tx = {
//     from: "0x3cCd02486AdA2ffF66D1Ae6b503e18F7D4B186Fb",
//     to: "0x0e70b2870347b973496cf39bccfc12395bb524b8",
//     nonce: nonce,
//     gas: 500000,
//     data: nftContract.methods.fibonacci(4).encodeABI(),
//   }

//   const signPromise = web3.eth.accounts.signTransaction(tx,"a27407710cd230da13c082235d61a3621adbdb7b7d260214dde231b74a467a7d")
//   signPromise
//     .then((signedTx) => {
//       web3.eth.sendSignedTransaction(
//         signedTx.rawTransaction,
//         function (err, hash) {
//           if (!err) {
//             console.log(
//               "The hash of your transaction is: ",
//               hash,
//               "\nCheck Alchemy's Mempool to view the status of your transaction!"
//             )
//           } else {
//             console.log(
//               "Something went wrong when submitting your transaction:",
//               err
//             )
//           }
//         }
//       )
//     })
//     .catch((err) => {
//       console.log(" Promise failed:", err);
//     })
// }

async function addFibonacci(n)  {

    nftContract.methods.addFibonacci(n).call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });

}

async function addAndCheckEvenOdd(n)  {

  nftContract.methods.addAndCheckEvenOdd(n).call((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

}

async function multiply([a,b,c])  {

  nftContract.methods.multiply([a,b,c]).call((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
}

// }



// async function divideNumbers([a,b,c])  {

//   nftContract.methods.divideNumbers([a,b,c]).call((error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result);
//   }
// });

// }









multiply([1,2,4]);
addFibonacci(4);
addAndCheckEvenOdd(3);
//addNumbers([4,5,6]);
//subtractNumbers([10,4,6]);
//divideNumbers([10,5,1]);



//add();
