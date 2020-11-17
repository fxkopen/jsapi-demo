<template>
  <div id="app">
    <div id="nav">
      <button @click="todo">Click me</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    todo() {
      FSOpen.service.crm.create({
        objectType: 'AccountObj',
        onSuccess(resp) {
          global.alert(JSON.stringify(resp));
        },
        onFail(error) {
          global.alert(JSON.stringify(error));
        },
      });
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
