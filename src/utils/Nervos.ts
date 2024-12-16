import * as bip39 from "bip39";
import { config, helpers } from "@ckb-lumos/lumos";
import * as hd from "@ckb-lumos/hd";

const getAddressByPrivateKey = (privateKey: string) => {
  const args = hd.key.privateKeyToBlake160(privateKey);
  const template = config.predefined.AGGRON4.SCRIPTS["SECP256K1_BLAKE160"]!;
  const lockScript = {
    codeHash: template.CODE_HASH,
    hashType: template.HASH_TYPE,
    args: args,
  };

  return helpers.encodeToAddress(lockScript);
};

const initNervos = () => {
  console.log("====================================");
  console.log("initNervos----");
  console.log("====================================");
  const mnc =
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen"; //bip39.generateMnemonic(256);
  // 通过助记词生成种子
  const seed = bip39.mnemonicToSeedSync(mnc);
  let publicKey, address, privateKey;

  try {
    const extendedPrivKey = hd.ExtendedPrivateKey.fromSeed(seed);
    console.log("NervosInfo", extendedPrivKey);
    // 通过种子生成私钥
    const info = extendedPrivKey.privateKeyInfo(hd.AddressType.Receiving, 0);
    privateKey = info.privateKey;

    // 使用私钥生成公钥和地址
    publicKey = info.publicKey;
    address = getAddressByPrivateKey(privateKey);
  } catch (error) {
    console.error("nervos error：", error);
  }
  return {
    mnc,
    address,
    publicKey,
    privateKey,
  };
};

export { initNervos };
