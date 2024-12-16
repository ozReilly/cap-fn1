import * as bitcoin from "bitcoinjs-lib";
import * as bip39 from "bip39";
import { BIP32Factory } from "bip32";
import * as ecc from "tiny-secp256k1";
const bip32 = BIP32Factory(ecc);
// Dogecoin 的网络参数
const DOGE_NETWORK = {
  messagePrefix: "\x19Dogecoin Signed Message:\n",
  bech32: "doge",
  bip32: { public: 0x02facafd, private: 0x02fac398 },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
};

// 生成钱包
async function initDogecoin() {
  const network = DOGE_NETWORK;

  const mnc =
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen";
  //bip39.generateMnemonic(256);
  const seed = bip39.mnemonicToSeedSync(mnc);
  const keypair = bip32.fromSeed(seed);
  const rootNode = keypair.derivePath("m/44'/0'/0'/0/0");
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

export { initDogecoin };
