// console.log("====================================");
// console.log("enter --- ton......");
// console.log("====================================");
import * as bip39 from "bip39";
import TonWeb from "tonweb";
const tonweb = new TonWeb(
  new TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC", {
    // apiKey: process.env.TON_APIK,
  })
);
const createWallet = async (mnc: string) => {
  let keyPair = TonWeb.utils.nacl.sign.keyPair();
  console.log("keyPair", keyPair);
  if (mnc) {
    const seed = bip39.mnemonicToSeedSync(mnc);
    keyPair = tonweb.utils.nacl.sign.keyPair.fromSeed(seed.slice(0, 32));
  }

  const publicKey = keyPair.publicKey;
  const privateKey = keyPair.secretKey;

  const WalletClass = TonWeb.Wallets.all.v3R2;
  const wallet = new WalletClass(tonweb.provider, {
    publicKey: publicKey,
  });
  console.log("publicKey:", publicKey);
  console.log("privateKey:", privateKey);
  let address;
  try {
    const walletAddress = await wallet.getAddress();
    address = walletAddress.toString(true, true, true, true);
  } catch (error) {
    console.error("get address error", error);
  }
  return {
    mnc,
    address,
    publicKey: Buffer.from(publicKey).toString("hex"),
    privateKey: Buffer.from(privateKey).toString("hex"),
  };
};

import { WalletContractV3R2 } from "@ton/ton";
import {
  mnemonicNew,
  mnemonicToPrivateKey,
  mnemonicToWalletKey,
} from "@ton/crypto";

const initTon = async () => {
  // Create Client
  // const client = new TonClient({
  //   endpoint: "https://toncenter.com/api/v2/jsonRPC",
  // });
  const mnc =
    "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen"; //bip39.generateMnemonic(256);
  let address = "",
    publicKey = "",
    privateKey = "";
  try {
    const mnemonics = mnc.split(" "); // await mnemonicNew(); //
    const keyPair = await mnemonicToWalletKey(mnemonics);

    const workchain = 0; // Usually you need a workchain 0
    const wallet = WalletContractV3R2.create({
      workchain,
      walletId: 0,
      publicKey: keyPair.publicKey,
    });
    console.log("====================================");
    console.log("wallet:", wallet);
    console.log("====================================");
    address = wallet.address.toString();
    publicKey = Buffer.from(wallet.publicKey).toString("hex");
    const pkey = await mnemonicToPrivateKey(mnemonics);
    privateKey = Buffer.from(pkey.secretKey).toString("hex");

    // const rootNode = await createWallet(mnc);
    // const address2 = rootNode.address;
    // const publicKey2 = rootNode.publicKey;
    // const priviteKey2 = rootNode.privateKey;
  } catch (error) {
    console.error("eeror", error);
  }
  return {
    mnc,
    address,
    publicKey,
    privateKey,
    // address2,
    // publicKey2,
    // priviteKey2,
  };
};
export { initTon };

// tonInfo: { "mnc": "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen", "address": "EQAWMD0kxnQZjFg6OUnxNLK4DRAgCOsSTthDB4cTv7U0GtqI", "publicKey": "130f53fd363ec38b96d2fe2d33dcea882c2731db876465b9872f581af2f38161" }
// tonInfo: { "mnc": "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen", "address": "kQBfYf90dc4K5eKHv0t-YZDaaCgp_WKYrj9P309LdOiKHb-F", "publicKey": "246af644bc69bdd02947d3dafd261333cbb11e9d15ac85e4cbd055e46e716a8d", "priviteKey": "a0465dd7bd821b51faa13b428c4156cdd043e5b57cd2c2e5b2d2412aa7413004246af644bc69bdd02947d3dafd261333cbb11e9d15ac85e4cbd055e46e716a8d" }
// tonInfo: { "mnc": "ability tuna injury diet kiss lemon aunt dress inmate this street more square panther describe term police tobacco road peasant stereo embark text frozen", "address": "EQDDYaEj2qGBm6_IRusmIb0RJIGsYY9bu6dvMDcGQKFWNPNG", "publicKey": "2010b9ef3ff6280989bdc0d24a595f2f0ff02454757b1e165ade837d523bf281", "privateKey": "11649f49cfb15abbb698ce3a06e71ed3954203ba62b7e6c3fbf2d263a74984a32010b9ef3ff6280989bdc0d24a595f2f0ff02454757b1e165ade837d523bf281" }
