import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const { location } = global;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    console.log('初始化Jsapi...');
    fetch(`//${location.hostname}:3000/signature?url=${encodeURIComponent(location.href.split('#')[0])}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const { data } = res;
        // 初始化JSAPI
        FSOpen.init({
          appId: 'FSAID_1319442', // 修改成自己的自建应用APPID
          timestamp: data.timestamp,
          nonceStr: data.nonce,
          signature: data.resultSign,
          jsApiList: ['service.crm.create'], // 添加自己想要测试的接口
          onSuccess: function onSuccess(r) {
            console.log(r);
            global.alert('init success');
          },
          onFail: function onFail(e) {
            console.log(e);
            global.alert('init failure');
          },
        });
      });
  },
}).$mount('#app');
