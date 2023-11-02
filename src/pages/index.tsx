import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function get() {
      const sdk = new ThirdwebSDK("ethereum", {
        clientId: "408c30bea260697a97e85d9b9294acf1",
      });
      const contract = await sdk.getContract(
        "0xC809Ce40A558aC353BEBEDa5a6FC1AF361f1D9Bb", // user's contract
        "nft-drop"
      );
      const arr = [...new Array(50).keys()];
      const owners = await Promise.all(
        arr.map((i) =>
          contract.erc721.ownerOf(i).catch((err) => {
            console.log(err);
            return "failed to fetch";
          })
        )
      );
      console.log("-------------------------------------");
      const data = arr.map((i) => ({
        tokenId: i,
        owner: owners[i],
      }));
      console.log(data);
    }
    get();
  });
  return <></>;
}
