<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI
        Components</a></p>
    <div v-if="name === 'Tab 1 page 333'">
      我是测试ton的
      <hr />
      <div>
        <ion-button @click="initInfoHandle"> init info</ion-button>
        <br />
        <button @click="initInfoHandle"> init info</button>
      </div>
      <hr />
      <div v-if="state.data?.btcInfo">
        btcInfo: {{ state.data.btcInfo }}
      </div>
      <hr />
      <div v-if="state.data?.ethInfo">
        ethInfo: {{ state.data.ethInfo }}
      </div>
      <hr />
      <div v-if="state.data?.tonInfo">
        tonInfo: {{ state.data.tonInfo }}
      </div>
      <hr />
      <div v-if="state.data?.tronInfo">
        tronInfo: {{ state.data.tronInfo }}
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
const state = reactive({
  data: {}
})
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
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
</style>
