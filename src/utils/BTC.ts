console.log("====================================");
console.log("enter --- btc......");
console.log("====================================");

import * as bip39 from "bip39";
import * as btcoin from "bitcoinjs-lib";
import { BIP32Factory } from "bip32";
import * as ecc from "tiny-secp256k1";
const bip32 = BIP32Factory(ecc);

const initBtc = async () => {
  console.log("====================================");
  console.log("initbtc----");
  console.log("====================================");
  const mnc =
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen";
  const seed = bip39.mnemonicToSeedSync(mnc);
  const keypair = bip32.fromSeed(seed);
  const rootNode = keypair.derivePath("m/44'/0'/0'/0/0");
  const pubkey = Buffer.from(rootNode.publicKey);
  const priKey = rootNode.toWIF();
  const p2pkAddress = btcoin.payments.p2pk({ pubkey }).address;
  const p2wpkhAddress = btcoin.payments.p2wpkh({ pubkey }).address;
  const p2pkhAddress = btcoin.payments.p2pkh({ pubkey }).address;
  return {
    mnc,
    pubkey: pubkey.toString("hex"),
    priKey,
    p2pkAddress,
    p2wpkhAddress,
    p2pkhAddress,
  };
};

export { initBtc };
