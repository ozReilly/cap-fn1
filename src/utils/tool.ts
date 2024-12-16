import { initBtc } from "./BTC";
import { initEth } from "./ETH";
import { initTron } from "./Tron";
import { initTon } from "./Ton";
import { initNervos } from "./Nervos";
import { initPolkadot } from "./Polkadot";
import { initDogecoin } from "./Dogecoin";
import { initLitecoin } from "./Litecoin";
console.log("====================================");
console.log("enter --- tool......");
console.log("====================================");
const init = async () => {
  console.log("====================================");
  console.log("tool---init");
  console.log("====================================");
  const btcInfo = await initBtc();
  console.log("==================================btcInfo==", btcInfo);
  const ethInfo = await initEth();
  console.log("==================================ethInfo==", ethInfo);
  const tronInfo = await initTron();
  console.log("==================================tronInfo==", tronInfo);
  const xrplInfo = await initTon();
  console.log("==================================xrplInfo==", xrplInfo);
  const tonInfo = await initTon();
  console.log("==================================tonInfo==", tonInfo);
  const NervosInfo = initNervos();
  console.log("==================================NervosInfo==", NervosInfo);

  const DogecoinInfo = initDogecoin();
  console.log("==================================DogecoinInfo==", DogecoinInfo);

  const LitecoinInfo = initLitecoin();
  console.log("==================================LitecoinInfo==", LitecoinInfo);

  const PolkadotInfo = initPolkadot();
  console.log("==================================PolkadotInfo==", PolkadotInfo);

  return {
    btcInfo,
    ethInfo,
    tronInfo,
    tonInfo,
    xrplInfo,
    NervosInfo,
    PolkadotInfo,
    DogecoinInfo,
    LitecoinInfo,
  };
};
const testAll = () => {};
export { init, testAll };
