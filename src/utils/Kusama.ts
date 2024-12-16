import * as bip39 from "bip39";

import {
  encodeAddress,
  mnemonicGenerate,
  mnemonicToMiniSecret,
  mnemonicValidate,
  ed25519PairFromSeed,
} from "@polkadot/util-crypto";

const initKusama = (mnc?: string) => {
  // 从助记词生成种子
  const mnoc = mnc ? mnc : bip39.generateMnemonic();
  const mnemonicAlice = mnemonicGenerate();
  console.log(`Generated mnemonic: ${mnemonicAlice}`);
  // Validate the mnemonic string that was generated
  const isValidMnemonic = mnemonicValidate(mnemonicAlice);

  console.log(`isValidMnemonic: ${isValidMnemonic}`);
  // 通过助记词生成种子
  const seedAlice = mnemonicToMiniSecret(mnoc);
  const keypair = ed25519PairFromSeed(seedAlice);
  const publicKey = Buffer.from(keypair.publicKey).toString("hex");
  const privateKey = Buffer.from(keypair.secretKey).toString("hex");
  const address = encodeAddress(keypair.publicKey, 2);

  return {
    mnoc,
    privateKey,
    publicKey,
    address,
  };
};
export { initKusama };
