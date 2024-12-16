<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI
        Components</a></p>
    <div v-if="name === 'Tab 1 page 333'">
      我是测试ton的
      <hr />
      <div>
        <ion-button @click="initInfoHandle"> init info ion-button</ion-button>
        <!-- <br /> -->
        <!-- <button @click="initInfoHandle"> init info button</button> -->
      </div>

      <hr />
      <div v-if="state.data?.btcInfo">
        btcInfo: {{ state.data?.btcInfo }}
      </div>
      <hr />
      <div v-if="state.data?.ethInfo">
        ethInfo: {{ state.data?.ethInfo }}
      </div>

      <hr />
      <div v-if="state.data?.tonInfo">
        tonInfo: {{ state.data?.tonInfo }}
      </div>
      <hr />

      <div v-if="state.data?.xrplInfo">
        xrplInfo: {{ state.data?.xrplInfo }}
      </div>
      <hr />

      <div v-if="state.data?.tronInfo">
        tronInfo: {{ state.data?.tronInfo }}
      </div>
      <hr />

      <div v-if="state.data?.NervosInfo">
        NervosInfo: {{ state.data?.NervosInfo }}
      </div>
      <hr />

      <div v-if="state.data?.PolkadotInfo">
        PolkadotInfo: {{ state.data?.PolkadotInfo }}
      </div>
      <hr />

      <div v-if="state.data?.LitecoinInfo">
        LitecoinInfo: {{ state.data?.LitecoinInfo }}
      </div>
      <hr />

      <div v-if="state.data?.DogecoinInfo">
        DogecoinInfo: {{ state.data?.DogecoinInfo }}
      </div>

      <hr />

      <div v-if="state.data?.KusamaInfo">
        KusamaInfo: {{ state.data?.KusamaInfo }}
      </div>

      <hr />

      <div v-if="state.data?.TezosInfo">
        TezosInfo: {{ state.data?.TezosInfo }}
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import * as tool from '../utils/tool'
import { reactive } from 'vue'
const props = defineProps({
  name: String,
});


// // 定义每种货币的账户信息接口
// interface CryptoInfo {
//   mnc?: string | undefined;            // 助记词
//   address?: string | undefined;        // 地址
//   publicKey?: string | undefined;      // 公钥
//   priviteKey?: string | undefined;     // 私钥
//   p2pkAddress?: string | undefined;   // Bitcoin P2PK 地址（可选）
//   p2wpkhAddress?: string | undefined; // Bitcoin P2WPKH 地址（可选）
//   p2pkhAddress?: string | undefined;  // Bitcoin P2PKH 地址（可选）
//   pubkey?: string | undefined;
//   priKey?: string | undefined;
// }

// // 定义整个状态对象的接口
// interface State {
//   data: {
//     btcInfo: CryptoInfo;
//     // ethInfo: CryptoInfo;
//     // tonInfo: CryptoInfo;
//     // tronInfo: CryptoInfo;
//   };
// }

// 创建响应式对象
const state = reactive<any>({
  data: {
    // btcInfo: {
    //   mnc: '',
    //   pubkey: '',
    //   priKey: '',
    //   p2pkAddress: '',
    //   p2wpkhAddress: '',
    //   p2pkhAddress: '',
    // },
    // ethInfo: {
    //   mnc: '',
    //   address: '',
    //   publicKey: '',
    //   priviteKey: '',
    // },
    // tonInfo: {
    //   mnc: '',
    //   address: '',
    //   publicKey: '',
    //   priviteKey: '',
    // },
    // tronInfo: {
    //   mnc: '',
    //   address: '',
    //   publicKey: '',
    //   priviteKey: '',
    // }
  }
});
console.log('====================================');
console.log('expole-pros', props.name);
console.log('====================================');
const initInfoHandle = async (params?: any) => {
  console.log('====================================');
  console.log('params:', params);
  console.log('====================================');
  const res = await tool.init()
  state.data = res
}
</script>

<style scoped>
#container {
  text-align: center;
  /* position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%); */
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

hr {
  border-bottom: 1px solid #000;
}
</style>
