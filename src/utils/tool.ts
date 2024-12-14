import { initBtc } from "./BTC";
import { initEth } from "./ETH";
import { initTron } from "./Tron";
import { initTon } from "./Ton";
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
  const tonInfo = await initTon();
  console.log("==================================tonInfo==", tonInfo);
  return {
    btcInfo,
    ethInfo,
    tronInfo,
    tonInfo,
  };
};
const testAll = () => {};
export { init, testAll };
