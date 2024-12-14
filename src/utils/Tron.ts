// import * as bip39 from "bip39";
import { TronWeb } from "tronweb";
import * as secp256k1 from "tiny-secp256k1";
const initTron = async () => {
  console.log("====================================");
  console.log("initTron----");
  console.log("====================================");
  //   const mnc =
  //     "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen";
  const mnc =
    "patch left empty genuine rain normal syrup yellow consider moon stock denial";
  const path = "m/44'/195'/0'/0/0";
  const hdNode = TronWeb.fromMnemonic(mnc, path);
  console.log("tron-hdnode:", hdNode);

  const address = hdNode.address;
  const publicKey = hdNode.publicKey.replace(/^0x/, ""); // 这里的公钥地址是未压缩的
  const priviteKey = hdNode.privateKey.replace(/^0x/, ""); // 需要替换掉0x才是正确的地址
  const taddress = TronWeb.address.fromPrivateKey(priviteKey);
  console.log("TRON Address: ", taddress); // 地址将以 "T" 开头
  console.log("isaddress:", TronWeb.isAddress(address));

  const uncompressedPublicKey = publicKey;
  console.log("Uncompressed Public Key:", uncompressedPublicKey);

  // 将未压缩公钥转换为 Buffer
  const publicKeyBuffer = Buffer.from(uncompressedPublicKey, "hex");

  // 使用 tiny-secp256k1 压缩公钥
  const compressedPublicKey = secp256k1.pointCompress(publicKeyBuffer, true);

  // 将压缩公钥转换为十六进制格式
  const compressedPublicKeyHex =
    Buffer.from(compressedPublicKey).toString("hex");

  console.log(
    "Compressed Public Key:",
    compressedPublicKeyHex,
    compressedPublicKey
  );

  //   const paddress = utils
  return {
    mnc,
    address,
    publicKey: compressedPublicKeyHex,
    priviteKey,
  };
};

export { initTron };
