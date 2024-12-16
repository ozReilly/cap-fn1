import * as bip39 from "bip39";

import { TezosToolkit } from "@taquito/taquito";
import { HDNode } from "@taquito/utils";
import { InMemorySigner, importKey } from "@taquito/signer";

// 通过助记词生成以太坊相关信息
const initTezos = async (omnc?: string) => {
  const mnc =
    omnc ||
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen"; //bip39.generateMnemonic(256);
  // Step 1: 使用助记词生成 Spending Key
  const memorySigner = InMemorySigner.fromMnemonic({ mnemonic: mnc });

  // 获取私钥和公钥
  const privateKey = await memorySigner.secretKey(); // 私钥
  const publicKey = await memorySigner.publicKey(); // 公钥

  // 获取 Tezos 地址
  const tezosAddress = await memorySigner.publicKeyHash(); // Tezos 地址

  // 打印私钥、公钥、地址
  console.log("Private Key:", privateKey);
  console.log("Public Key:", publicKey);
  console.log("Tezos Address:", tezosAddress);

  return {
    mnc,
    privateKey,
    publicKey,
    address: tezosAddress,
  };
};
export { initTezos };
