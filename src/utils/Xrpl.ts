// import * as bip39 from "bip39";

import { Wallet } from "xrpl";

const initXrpl = async () => {
  console.log("====================================");
  console.log("initXrpl----");
  console.log("====================================");
  const mnc =
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen"; //bip39.generateMnemonic(256);
  const wallet = Wallet.fromMnemonic(mnc);
  const privateKey = wallet.privateKey; //''
  const publicKey = wallet.publicKey;
  const address = wallet.address;
  return {
    mnc,
    address,
    publicKey,
    privateKey,
  };
};

export { initXrpl };
