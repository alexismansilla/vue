<template>
  <h1>Memes</h1>
  <h2>{{ $store.state.titleApp }}</h2>
</template>

<script>
import { useStore } from "vuex"

export default {
  name: 'App',
  setup() {
    const store = useStore()

    console.log(store.state.titleApp)
    console.log(store.state.memes)

    return {
      ...store.state
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
