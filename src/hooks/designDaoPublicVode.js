


import { useCallback } from "react";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { addNfts} from "../utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";
const PublicVolte = () => {
    const { account } = useWeb3React();
    // console.log(typeof account,'accountaccountaccount');
  const web3 = useWeb3();
  const tokenAddress = environment.DesignDao;
  const contract = addNfts(tokenAddress, web3);
  const publicVolte = useCallback(
    async (index) => {
        // console.log( account,'accountaccount');
      // let nd = 1000000000000000000000;
      // nd = web3.utils.toWei(nd.toString(), "ether");
      // console.log("nddddd",nd)
      try {
        const gas = await contract.methods.voteNfts(index).estimateGas({from:account });
        const details = await contract.methods.voteNfts(index).send({
          from: account,
          gas,
        });
        return details;
      } catch (error) {
        throw error;
      }
    },
    [contract]
  );
  return { publicVolte: publicVolte };
};
export default PublicVolte;
