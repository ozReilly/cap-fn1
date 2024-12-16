import * as bip39 from "bip39";
import { hd, config, helpers } from "@ckb-lumos/lumos";
const { ExtendedPrivateKey, AddressType } = hd;

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
  const extendedPrivKey = ExtendedPrivateKey.fromSeed(seed);
  console.log("NervosInfo", extendedPrivKey);

  // 通过种子生成私钥
  const info = extendedPrivKey.privateKeyInfo(AddressType.Receiving, 0);
  const privateKey = info.privateKey;

  // 使用私钥生成公钥和地址
  const publicKey = info.publicKey;
  const address = getAddressByPrivateKey(privateKey);
  return {
    mnc,
    address,
    publicKey,
    privateKey,
  };
};

export { initNervos };
