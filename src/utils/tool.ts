import { initBtc } from "./BTC";
import { initEth } from "./ETH";
import { initTron } from "./Tron";
import { initTon } from "./Ton";
import { initNervos } from "./Nervos";
import { initPolkadot } from "./Polkadot";
import { initDogecoin } from "./Dogecoin";
import { initLitecoin } from "./Litecoin";
import { initCosmos } from "./Cosmos";
import { initKusama } from "./Kusama";
import { initTezos } from "./Tezos";
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
  const NervosInfo = await initNervos();
  console.log("==================================NervosInfo==", NervosInfo);

  const DogecoinInfo = await initDogecoin();
  console.log("==================================DogecoinInfo==", DogecoinInfo);

  const LitecoinInfo = await initLitecoin();
  console.log("==================================LitecoinInfo==", LitecoinInfo);

  const PolkadotInfo = initPolkadot();
  console.log("==================================PolkadotInfo==", PolkadotInfo);

  const CosmosInfo = await initCosmos();
  console.log("==================================CosmosInfo==", CosmosInfo);

  const KusamaInfo = initKusama();
  console.log("==================================KusamaInfo==", KusamaInfo);

  const TezosInfo = await initTezos();
  console.log("==================================TezosInfo==", TezosInfo);

  return {
    btcInfo,
    CosmosInfo,
    DogecoinInfo,
    ethInfo,
    KusamaInfo,
    LitecoinInfo,
    NervosInfo,
    PolkadotInfo,
    TezosInfo,
    tonInfo,
    tronInfo,
    xrplInfo,
  };
};
const testAll = () => {};
export { init, testAll };
