import * as bitcoin from "bitcoinjs-lib";
import * as bip39 from "bip39";
import { BIP32Factory } from "bip32";
import * as ecc from "tiny-secp256k1";
const bip32 = BIP32Factory(ecc);
// Litecoin 和 Dogecoin 的网络参数
export const LTC_NETWORK = {
  messagePrefix: "\x19Litecoin Signed Message:\n",
  bech32: "ltc", // Litecoin 的 Bech32 前缀
  bip32: {
    public: 0x019da462, // Litecoin 公钥
    private: 0x019d9cfe, // Litecoin 私钥
  },
  pubKeyHash: 0x30, // Litecoin 的 P2PKH 地址前缀 (L开头)
  scriptHash: 0x32, // Litecoin 的 P2SH 地址前缀
  wif: 0xb0, // 私钥格式
};
// 生成钱包
async function initLitecoin() {
  const network = LTC_NETWORK;

  const mnc =
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen";
  //bip39.generateMnemonic(256);
  const seed = bip39.mnemonicToSeedSync(mnc);
  const keypair = bip32.fromSeed(seed);
  const rootNode = keypair.derivePath("m/44'/2'/0'/0/0");
  const { address } = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(keypair.publicKey),
    network,
  });

  return {
    mnc,
    address,
    privateKey: rootNode.toWIF(),
    publicKey: Buffer.from(rootNode.publicKey).toString("hex"),
  };
}

export { initLitecoin };
