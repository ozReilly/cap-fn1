console.log("====================================");
console.log("enter --- ton......");
console.log("====================================");

import * as bip39 from "bip39";
import { HDNodeWallet } from "ethers";
const initTon = async () => {
  console.log("====================================");
  console.log("initbtc----");
  console.log("====================================");
  const mnc =
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen"; //bip39.generateMnemonic(256);
  const seed = bip39.mnemonicToSeedSync(mnc);
  const keypair = HDNodeWallet.fromSeed(seed);
  const rootNode = keypair.derivePath("m/44'/60'/0'/0/0");
  console.log("rootNode", keypair);
  const address = rootNode.address;
  const publicKey = rootNode.publicKey;
  const priviteKey = rootNode.privateKey;
  return {
    mnc,
    address,
    publicKey,
    priviteKey,
  };
};

export { initTon };
