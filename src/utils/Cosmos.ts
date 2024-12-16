import * as bip39 from "bip39";

import { Secp256k1HdWallet } from "@cosmjs/launchpad";

// 通过助记词生成以太坊相关信息
const initCosmos = async (mnc?: string) => {
  const mnoc = mnc ? mnc : bip39.generateMnemonic();
  // 将助记词转换为种子
  //   const seed = bip39.mnemonicToSeedSync(mnoc);
  console.log("mnoc:", mnoc);
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnoc);
  const [{ address, pubkey }] = await wallet.getAccounts();
  const privateKey = "";
  const publicKey = Buffer.from(pubkey).toString("hex");
  return {
    mnoc,
    privateKey,
    publicKey,
    address,
  };
};
export { initCosmos };
